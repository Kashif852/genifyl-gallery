'use client'
import React, { useEffect, useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import {
  getTypesByTab,
  getThemesByTabAndType,
  getThemeDataByTabAndTheme
} from './Tab2Data';
import Tab2Grid from "./Tab2Grid"
import { useDispatch, useSelector } from 'react-redux';
import { selectPrompt, setPrompt } from '@/redux/slices/uiSlice';
const genderOptions = {
  Male: [
    { value: 'young-boy', label: 'Young Boy (1-12)' },
    { value: 'teenage-boy', label: 'Teenage Boy (13-19)' },
    { value: 'young-man', label: 'Young Man (20-35)' },
    { value: 'middle-aged-man', label: 'Middle-aged Man (36-50)' },
    { value: 'old-man', label: 'Old Man (51-60)' }
  ],
  Female: [
    { value: 'young-girl', label: 'Young Girl (1-12)' },
    { value: 'teenage-girl', label: 'Teenage Girl (13-19)' },
    { value: 'young-woman', label: 'Young Woman (20-35)' },
    { value: 'middle-aged-woman', label: 'Middle-aged Woman (36-50)' },
    { value: 'old-woman', label: 'Old Woman (51-60)' }
  ]
};


const NestedTabs = ({ tabType, mainTab}) => {
  const currentPrompt = useSelector(selectPrompt);
  const dispatch = useDispatch();

  // Initialize state with first available values
  const [type, setType] = useState('Avatar');
  const [gender, setGender] = useState(tabType === 'Male' ? 'young-boy' : 'young-girl');
  const [age, setAge] = useState('10');
  const [theme, setTheme] = useState('');
  const [typeOptions, setTypeOptions] = useState([]);
  const [themeOptions, setThemeOptions] = useState([]);
  const [gridImages, setGridImages] = useState([]);

  // Helper function to update prompt with specific field
  const updatePromptField = (prompt, field, value) => {
    if (!prompt) return '';
    
    switch(field) {
      case 'age':
        return prompt.replace(/\d+-year-old/, `${value}-year-old`);
      case 'gender':
        return prompt.replace(/(young-boy|young-girl|teenage-boy|teenage-girl|young-man|young-woman|middle-aged-man|middle-aged-woman|old-man|old-woman)/, value);
      default:
        return prompt;
    }
  };

  // Set initial prompt and types
  useEffect(() => {
    const types = getTypesByTab(tabType);
    setTypeOptions(types);
    
    const defaultGender = tabType === 'Male' ? 'young-boy' : 'young-girl';
    setGender(defaultGender);

    setAge('10')
    setTheme('Space and Sci-Fi')
    
    // Load initial images for first theme
    const initialImages = getThemeDataByTabAndTheme(tabType, type, 'Space and Sci-Fi').map(img => ({
      ...img,
      prompt: img.prompt.replace('{age}', age).replace('{gender}', gender)
    }));
    setGridImages(initialImages);

  }, [tabType,mainTab]);

  // Handle theme options updates
  useEffect(() => {
    if (type && gender && age) {
      const themes = getThemesByTabAndType(tabType, type);
      setThemeOptions(themes);
      
      // Set first theme if none selected
      if (!theme && themes.length > 0) {
        const firstTheme = themes[0];
        setTheme(firstTheme);
        
        // Load initial images for first theme
        const initialImages = getThemeDataByTabAndTheme(tabType, type, firstTheme).map(img => ({
          ...img,
          prompt: img.prompt.replace('{age}', age).replace('{gender}', gender)
        }));
        setGridImages(initialImages);
        
      }
    }
  }, [type, gender, age, tabType]);

  const handleChange = (fieldName, value) => {
    switch(fieldName) {
      case 'type':
        setType(value);
        if (gender && age) {
          const newThemes = getThemesByTabAndType(tabType, value);
          setThemeOptions(newThemes);
          
          if (newThemes && newThemes.length > 0) {
            const firstTheme = newThemes[0];
            setTheme(firstTheme);
            const newImages = getThemeDataByTabAndTheme(tabType, value, firstTheme).map(img => ({
              ...img,
              prompt: img.prompt.replace('{age}', age).replace('{gender}', gender)
            }));
            setGridImages(newImages);
            if (newImages.length > 0) {
              dispatch(setPrompt(newImages[0].prompt));
            }
          }
        }
        break;

      case 'gender':
        setGender(value);
        if (currentPrompt) {
          const updatedPrompt = updatePromptField(currentPrompt, 'gender', value);
          dispatch(setPrompt(updatedPrompt));
        }
        if (theme) {
          const updatedImages = getThemeDataByTabAndTheme(tabType, type, theme).map(img => ({
            ...img,
            prompt: img.prompt.replace('{age}', age).replace('{gender}', value)
          }));
          setGridImages(updatedImages);
        }
        break;

      case 'age':
        const ageNum = parseInt(value);
        if (isNaN(ageNum) || ageNum < 1 || ageNum > 60) {
          return;
        }
        setAge(value);
        if (currentPrompt) {
          const updatedPrompt = updatePromptField(currentPrompt, 'age', value);
          dispatch(setPrompt(updatedPrompt));
        }
        if (theme) {
          const updatedImages = getThemeDataByTabAndTheme(tabType, type, theme).map(img => ({
            ...img,
            prompt: img.prompt.replace('{age}', value).replace('{gender}', gender)
          }));
          setGridImages(updatedImages);
        }
        break;

      case 'theme':
        setTheme(value);
        const images = getThemeDataByTabAndTheme(tabType, type, value).map(img => ({
          ...img,
          prompt: img.prompt.replace('{age}', age).replace('{gender}', gender)
        }));
        setGridImages(images);
        if (images.length > 0) {
          dispatch(setPrompt(images[0].prompt));
        }
        break;
    }
  };

  // Modified Tab2Grid component
  const handleImageClick = (prompt) => {
    dispatch(setPrompt(prompt));
  };

  return (
    <>
      <Row>
        <Form className="w-100">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>Select Type</Form.Label>
                <Form.Select
                  value={type}
                  onChange={(e) => handleChange('type', e.target.value)}
                >
                  <option value="">Choose type</option>
                  {typeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            
            {type && (
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Select Gender Category</Form.Label>
                  <Form.Select
                    value={gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    {genderOptions[tabType].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            )}
          </Row>

          <Row>
            {type && gender && (
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Enter Age (1-60)</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="60"
                    value={age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    placeholder="Enter age between 1 and 60"
                  />
                </Form.Group>
              </Col>
            )}

            {type && gender && age && (
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select
                    value={theme}
                    onChange={(e) => handleChange('theme', e.target.value)}
                  >
                    {/* <option value="">Select theme</option> */}
                    {themeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            )}
          </Row>
        </Form>
      </Row>

      {gridImages.length > 0 && (
        <Tab2Grid handleImageClick={handleImageClick} images={gridImages} theme={theme}/>
      )}
    </>
  );
};

export default NestedTabs;
