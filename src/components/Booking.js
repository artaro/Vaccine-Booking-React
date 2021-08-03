import React, { useState } from "react";
import { Dropdown } from 'semantic-ui-react';
import "../app.css";
import { db } from "../firebase";


const Booking = () => {
  const [name, setName] = useState("");
  const [gender, setGenderList] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [vaccineName, setVaccineList] = useState("");
  const [drugAllergy, setDrugAllergy] = useState("");

  const [loader, setLoader] = useState(false);

  const vaccineList = [{ key: 1, text: 'AstraZeneca', value: 'AstraZeneca' },
  { key: 1, text: 'Johnson & Johnson', value: 'Johnson & Johnson' },
  { key: 2, text: 'Moderna', value: 'Moderna' },
  { key: 3, text: 'Pfizer', value: 'Pfizer' },
  { key: 4, text: 'Sinovac', value: 'Sinovac' },
  { key: 5, text: 'Sinopharm', value: 'Sinopharm' },
  { key: 6, text: 'Sputnik V', value: 'Sputnik V' }]

  const genderList = [{ key: 1, text: 'Male', value: 1 },
  { key: 2, text: 'Female', value: 2 }]

{/*ใช้ lib dropdown ของ semantic */}
  const VaccineDropdown = () => (
    <Dropdown placeholder='Select Vaccine' fluid selection options={vaccineList} onchange={(e) => setVaccineList(e.target.value)} />
  )

  const GenderDropdown = () => (
    <Dropdown placeholder='Select Gender' fluid selection options={genderList} />
  )


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Booking-data")
      .add({
        name: name,
        gender: gender,
        phoneNumber: phoneNumber,
        email: email,
        vaccineName: vaccineName,
        drugAllergy: drugAllergy,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setGenderList("");
    setPhoneNumber("");
    setEmail("");
    setVaccineList("");
    setDrugAllergy("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1> Vaccine Booking </h1>

      <label>Name</label>
      <input
        placeholder="Name and Last name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* เป็น Dropdown เลือกเพศ ส่งข้อมูล Gender เข้า firebase ไม่ได้ ไม่รู้วิธีแก้ */}
      <label>Gender</label>
      <div>
        <GenderDropdown />
      </div>

      <label>Phone Number</label>
      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* เป็น Dropdown เลือกวัคซีน ส่งข้อมูล Vaccine เข้า firebase ไม่ได้ ไม่รู้วิธีแก้ */}
      <label>Vaccine Name</label>
      <div>
        <VaccineDropdown />
      </div>
      <label>Drug Allergy</label>
      <textarea
        placeholder="Message"
        value={drugAllergy}
        onChange={(e) => setDrugAllergy(e.target.value)}
      ></textarea>



      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Booking;
