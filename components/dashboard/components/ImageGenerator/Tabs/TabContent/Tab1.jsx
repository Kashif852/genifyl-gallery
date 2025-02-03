"use client";
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { avatar_template, painting_theme, pencil_sketch, scene_template } from './templates';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrompt, setPrompt } from '@/redux/slices/uiSlice';

const Tab1 = ({mainTabKey}) => {
  const prompt = useSelector(selectPrompt);
  const dispatch = useDispatch();

  // Helper function needs to be defined before defaultValues
  const getFirstValue = (template, field = null) => {
    if (!template) return '';
    if (field) {
      // For nested fields like costume, accessories, etc.
      const firstItem = Object.values(template)[0]?.[0];
      return firstItem ? firstItem[field] : '';
    } else {
      // For theme selection
      return Object.keys(template)[0] || '';
    }
  };

  // Now we can define defaultValues using getFirstValue
  const defaultValues = {
    avatar: {
      theme: getFirstValue(avatar_template),
      costume: getFirstValue(avatar_template, 'costume'),
      accessories: getFirstValue(avatar_template, 'accessories'),
      details: getFirstValue(avatar_template, 'details')
    },
    scene: {
      theme: getFirstValue(scene_template),
      action: getFirstValue(scene_template, 'action')
    },
    sketch: {
      theme: getFirstValue(pencil_sketch),
      scene: getFirstValue(pencil_sketch, 'scene')
    },
    paint: {
      theme: getFirstValue(painting_theme),
      artistName: getFirstValue(painting_theme, 'artist_name'),
      paintingConcept: getFirstValue(painting_theme, 'painting_concept'),
      outputTxt: getFirstValue(painting_theme, 'output_txt')
    },
    common: {
      childAge: '10',
      gender: 'boy'
    }
  };

  // Now we can use defaultValues in useState
  const [formData, setFormData] = useState({
    type: 'avatar',
    childAge: defaultValues.common.childAge,
    gender: defaultValues.common.gender,
    theme: defaultValues.avatar.theme,
    costume: defaultValues.avatar.costume,
    accessories: defaultValues.avatar.accessories,
    details: defaultValues.avatar.details,
    action: defaultValues.scene.action,
    scene: defaultValues.sketch.scene,
    artistName: defaultValues.paint.artistName,
    paintingConcept: defaultValues.paint.paintingConcept,
    outputTxt: defaultValues.paint.outputTxt
  });

  const handleChange = (fieldName, value) => {
    setFormData(prev => {
      const newData = { ...prev, [fieldName]: value };
      
      if (fieldName === 'type') {
        const typeDefaults = defaultValues[value];
        newData.theme = typeDefaults.theme;
        
        // Set first available values for dependent fields
        switch (value) {
          case 'avatar':
            const firstAvatarOption = avatar_template[typeDefaults.theme]?.[0];
            newData.costume = firstAvatarOption?.costume || typeDefaults.costume;
            newData.accessories = firstAvatarOption?.accessories || typeDefaults.accessories;
            newData.details = firstAvatarOption?.details || typeDefaults.details;
            break;
          case 'scene':
            const firstSceneOption = scene_template[typeDefaults.theme]?.[0];
            newData.action = firstSceneOption?.action || typeDefaults.action;
            break;
          case 'sketch':
            const firstSketchOption = pencil_sketch[typeDefaults.theme]?.[0];
            newData.scene = firstSketchOption?.scene || typeDefaults.scene;
            break;
          case 'paint':
            const firstPaintOption = painting_theme[typeDefaults.theme]?.[0];
            newData.artistName = firstPaintOption?.artist_name || typeDefaults.artistName;
            newData.paintingConcept = firstPaintOption?.painting_concept || typeDefaults.paintingConcept;
            newData.outputTxt = firstPaintOption?.output_txt || typeDefaults.outputTxt;
            break;
        }
      }
      
      // When theme changes, update dependent fields with first available options
      if (fieldName === 'theme') {
        switch (prev.type) {
          case 'avatar':
            const firstAvatarOption = avatar_template[value]?.[0];
            if (firstAvatarOption) {
              newData.costume = firstAvatarOption.costume;
              newData.accessories = firstAvatarOption.accessories;
              newData.details = firstAvatarOption.details;
            }
            break;
          case 'scene':
            newData.action = scene_template[value]?.[0]?.action || defaultValues.scene.action;
            break;
          case 'sketch':
            newData.scene = pencil_sketch[value]?.[0]?.scene || defaultValues.sketch.scene;
            break;
          case 'paint':
            const firstPaintOption = painting_theme[value]?.[0];
            if (firstPaintOption) {
              newData.artistName = firstPaintOption.artist_name;
              newData.paintingConcept = firstPaintOption.painting_concept;
              newData.outputTxt = firstPaintOption.output_txt;
            }
            break;
        }
      }
      
      return newData;
    });
  };

  // Generate prompt whenever form data changes
  useEffect(() => {
    let newPrompt = '';
    switch (formData.type) {
      case 'scene':
        newPrompt = `A 3D full-body animated character, 3D full-body scene of a ${formData.childAge}-year-old ${formData.gender}, ${formData.action} in vibrant 3D cartoon style.`;
        break;
      case 'avatar':
        newPrompt = `3D Full body animation character, 3D Full body Avatar of a ${formData.childAge}-year-old ${formData.gender} in the center, ${formData.costume} ${formData.accessories} ${formData.details} in 3D cartoon style, plain white background.`;
        break;
      case 'sketch':
        newPrompt = `pencil sketch of ${formData.gender} ${formData.scene}`;
        break;
      case 'paint':
        newPrompt = `${formData.artistName} style painting ${formData.paintingConcept} ${formData.outputTxt}`;
        break;
    }
    // alert("mainTabKey: "+JSON.stringify(mainTabKey)+" formData.type: "+JSON.stringify(formData.type)+" newPrompt: "+JSON.stringify(newPrompt))
    dispatch(setPrompt(newPrompt));
  }, [formData, dispatch, mainTabKey]);


  return (
    <div className="p-4 max-w-4xl mx-auto" style={{ background: "linear-gradient(145deg, #ebebfd, #e0e0f5)" }}>
      <Form>
        {/* Type Field */}
        <Form.Group className="mb-4">
          <Form.Select
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="scene">Scene</option>
            <option value="avatar">Avatar</option>
            <option value="sketch">Sketch</option>
            <option value="paint">Paint</option>
          </Form.Select>
        </Form.Group>

        {/* Child Age - show for all except sketch */}
        {formData.type !== "sketch" && (
          <Form.Group className="mb-4">
            <Form.Label>Child Age</Form.Label>
            <Form.Control
              type="number"
              value={formData.childAge}
              onChange={(e) => handleChange("childAge", e.target.value)}
            />
          </Form.Group>
        )}

        {/* Gender */}
        <Form.Group className="mb-4">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <option value="boy">BOY</option>
            <option value="girl">GIRL</option>
          </Form.Select>
        </Form.Group>

        {/* Scene Type Fields */}
        {formData.type === "scene" && (
          <>
            <Form.Group className="mb-4">
              <Form.Label>Theme</Form.Label>
              <Form.Select
                value={formData.theme}
                onChange={(e) => handleChange("theme", e.target.value)}
              >
                {Object.keys(scene_template).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {formData.theme && (
              <Form.Group className="mb-4">
                <Form.Label>Action</Form.Label>
                <Form.Select
                  value={formData.action}
                  onChange={(e) => handleChange("action", e.target.value)}
                >
                  {scene_template[formData.theme]?.map((item, index) => (
                    <option key={index} value={item.action}>{item.action}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}
          </>
        )}

        {/* Avatar Type Fields */}
        {formData.type === "avatar" && (
          <>
            <Form.Group className="mb-4">
              <Form.Label>Theme</Form.Label>
              <Form.Select
                value={formData.theme}
                onChange={(e) => handleChange("theme", e.target.value)}
              >
                {Object.keys(avatar_template).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {formData.theme && (
              <>
                {['costume', 'accessories', 'details'].map((field) => (
                  <Form.Group key={field} className="mb-4">
                    <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                    <Form.Select
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                    >
                      <option value="">{`Select ${field}`}</option>
                      {avatar_template[formData.theme]?.map((item, index) => (
                        <option key={index} value={item[field]}>{item[field]}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                ))}
              </>
            )}
          </>
        )}

         {formData.type === "paint" && (
          <>
            <Form.Group className="mb-4">
              <Form.Label>Theme</Form.Label>
              <Form.Select
                value={formData.theme}
                onChange={(e) => handleChange("theme", e.target.value)}
              >
                <option value="">Select theme</option>
                {Object.keys(painting_theme).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {formData.theme && (
              <>
                <Form.Group className="mb-4">
                  <Form.Select
                    value={formData.artistName}
                    onChange={(e) => handleChange("artistName", e.target.value)}
                  >
                    {painting_theme[formData.theme]?.map((item, index) => (
                      <option key={index} value={item.artist_name}>{item.artist_name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Painting Concept</Form.Label>
                  <Form.Select
                    value={formData.paintingConcept}
                    onChange={(e) => handleChange("paintingConcept", e.target.value)}
                  >
                    {painting_theme[formData.theme]?.map((item, index) => (
                      <option key={index} value={item.painting_concept}>{item.painting_concept}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Output Text</Form.Label>
                  <Form.Select
                    value={formData.outputTxt}
                    onChange={(e) => handleChange("outputTxt", e.target.value)}
                  >
                    {painting_theme[formData.theme]?.map((item, index) => (
                      <option key={index} value={item.output_txt}>{item.output_txt}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </>
            )}
          </>
        )}
      </Form>
    </div>
  );
};

export default Tab1;



