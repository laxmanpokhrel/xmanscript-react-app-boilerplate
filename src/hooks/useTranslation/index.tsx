/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux';

const getLanguageJSON = (lan: any): Record<string, any> => {
  switch (lan) {
    case 'nepali':
      return [];
    default:
      return {};
  }
};

function useTranslation() {
  const { currentLanguage } = useSelector((state: any) => state.language);

  const _t = (key: string) => {
    return getLanguageJSON(currentLanguage)[key] || key;
  };

  return { _t };
}

export default useTranslation;
