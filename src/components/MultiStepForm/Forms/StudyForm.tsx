import React, { FC, useState } from 'react'
import ACInput from '../../ACInput/ACInput'
import "./Forms.css";

type AccountData = {
  studyProgramme: string,
  gender: string,
  yearOfStudy: string,
  completionYear: string
}

interface Props extends AccountData {
  updateField: (data: Partial<AccountData>) => void
}

const StudyForm: FC<Props> = ({studyProgramme, gender, yearOfStudy, completionYear, updateField}) => {

  return (
    <div className='form-content'>
        <h2>Education</h2>
        <ACInput type="" placeholder="Study Programme" value={studyProgramme} onChange={(e) => updateField({ studyProgramme: e.target.value })}/>
        <ACInput type="" placeholder="Gender" value={gender} onChange={(e) => updateField({ gender: e.target.value })}/>
        <ACInput type="" placeholder="Year of study" value={yearOfStudy} onChange={(e) => updateField({ yearOfStudy: e.target.value })}/>
        <ACInput type="" placeholder="Year of Completion" value={completionYear} onChange={(e) => updateField({ completionYear: e.target.value })}/>
    </div>
  )
}

export default StudyForm