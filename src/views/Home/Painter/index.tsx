import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import { CustomMode } from 'src/types/app';
import RegularPainter from './RegularPainter';
import CompositePainter from './CompositePainter';

const Painter: React.FC = () => {
  const { customMode } = useSelector((state: RootState) => ({
    customMode: state.app.customMode,
  }));

  if (customMode === CustomMode.Detail || customMode === CustomMode.Form) return <RegularPainter />;

  if (customMode === CustomMode.Table) return <CompositePainter />;

  return null;
};

export default Painter;
