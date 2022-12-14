import React, { FC, useEffect } from 'react'
import ScanQrCodeView from '../views/QrCodeView/ScanQrCodeView'
import {
  claimTicket,
  addSurveyToCompanyDatabase,
} from '../models/Firebase/FirebaseModel'
import { auth } from '../models/Firebase/firebaseConfig'

const CryptoJS = require('crypto-js')

const QrCodePresenter: FC = (props) => {
  const [company, setCompany] = React.useState('')
  const [companyRatings, setCompanyRatings] = React.useState({})
  const [stallRating, setStallRating] = React.useState<number>(1)
  const [experienceRating, setExperienceRating] = React.useState<number>(1)
  //const [ticketStatus, setTicketStatus] = React.useState<boolean>(true);

  useEffect(() => {
    checkURL()
  }, [fetchFromURL])

  const decryptWithAES = (ciphertext: any) => {
    const passphrase = process.env.REACT_APP_AC22_ENCRYPTKEY
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
  }

  async function checkURL() {
    //Async await not working atm
    const url = window.location.href
    if (url.includes('#')) {
      await fetchFromURL(url)
      // claimTicket(company, ticketType, ticketNr); // Better fix to be implemented here
    }
  }

  async function fetchFromURL(url: string): Promise<boolean> {
    const hash = url.substring(url.indexOf('#') + 1)
    const decoded = decryptWithAES(hash)
    const urlSearchParams = new URLSearchParams(decoded)
    setCompany(urlSearchParams.get('companyName')?.toString() ?? '')
    return claimTicket(
      auth.currentUser?.uid ?? '',
      urlSearchParams.get('ticketType')?.toString() ?? '',
      urlSearchParams.get('companyName')?.toString() ?? '',
      parseInt(urlSearchParams.get('ticketNr')?.toString() ?? '1'),
    )
    //alert(ticketStatus + "inside ");
    //Ugly fix as the state is not updated in time
  }

  function sendSurvey() {
    addSurveyToCompanyDatabase(
      auth.currentUser?.uid ?? '',
      company,
      experienceRating,
      stallRating,
    )
  }

  function sanitize(string: string) {
    return (
      string.charAt(0).toUpperCase() +
      string.substring(0, string.indexOf('@')).slice(1)
    )
  }

  return (
    <ScanQrCodeView
      company={sanitize(company)}
      fetchFromURL={fetchFromURL}
      setStallRating={setStallRating}
      setExperienceRating={setExperienceRating}
      sendSurvey={sendSurvey}
    />
  )
}

export default QrCodePresenter
