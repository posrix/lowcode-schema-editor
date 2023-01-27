import { CustomMode } from 'src/types/app';

export function isCustomMode(customMode: any): customMode is CustomMode {
  return Object.values(CustomMode).indexOf(customMode) !== -1;
}
