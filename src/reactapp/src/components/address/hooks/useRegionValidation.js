import { useEffect } from 'react';
import _get from 'lodash.get';
import _set from 'lodash.set';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { _findById } from '../../../utils';
import useAppContext from '../../../hook/useAppContext';

const defaultRegionRule = YupString().nullable();
const reqRegionRule = YupString().required(__('Region is required'));

export default function useRegionValidation(countryValue, validationSchema) {
  const { countryList } = useAppContext();

  useEffect(() => {
    if (countryValue && validationSchema.region) {
      const country = _findById(countryList, countryValue);
      const regionRequired = !!_get(country, 'stateRequired');
      const regionRule = regionRequired ? reqRegionRule : defaultRegionRule;
      _set(validationSchema, 'region', regionRule);
    }
  }, [countryValue, validationSchema, countryList]);

  return validationSchema;
}
