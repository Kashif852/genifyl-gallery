"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserCredits, fetchUserCredits } from '../../../../redux/slices/uiSlice';

const CreditDisplay = () => {
  const credits = useSelector(selectUserCredits);

  return (
    <div style={{ marginTop: '1rem', color: '#666' }}>
      Available Credits: <span style={{ fontWeight: 'bold', color: '#6844ed' }}>{credits || 0}</span>
    </div>
  );
};

export default CreditDisplay;