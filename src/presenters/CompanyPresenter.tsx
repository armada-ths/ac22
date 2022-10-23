import { FC } from 'react'

import CompanyView from '../views/CompanyView/CompanyView';
import { DummyModel } from '../models/DummyModel';

interface Props {
    model: DummyModel;
}

const CompanyPresenter: FC<Props>= ({ model }) =>{
  return (
    <CompanyView companies={model.companies} company={model.companies[model.currentCompany]} setStar={() => model.setStar()}></CompanyView>
  )
}

export default CompanyPresenter