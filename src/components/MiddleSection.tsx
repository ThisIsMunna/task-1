import React, { useEffect } from "react";
import "./MiddleSection.css";
import MultiRangeSlider from "./RangeSlider";
import CountryData from "../data/countries.json";
import { useState } from "react";
import axios from "axios";

const countryAndCity: {
  [key: string]: string[];
} = CountryData;

const subjects = [
  {
    subject: "Math",
    checked: false,
  },

  {
    subject: "History",
    checked: false,
  },
  {
    subject: "English",
    checked: false,
  },
  {
    subject: "Physics",
    checked: false,
  },
  {
    subject: "Biology",
    checked: false,
  },
  {
    subject: "Chemistry",
    checked: false,
  },
  {
    subject: "Literature",
    checked: false,
  },
  {
    subject: "Astronomy",
    checked: false,
  },
  {
    subject: "Geography",
    checked: false,
  },
];

const countries = Object.keys(countryAndCity);
let years: number[] = [];

// make an array of years from 1900 to the current year
const currentYear = new Date().getFullYear();
for (let i = currentYear; i > 1900; i--) {
  years.push(i);
}

const genders = ["Male", "Female", "Others"];

const experienceRanges = ["0-1 year", "1-3 years", "3-5 years", "5-8 years"];

const MiddleSection = () => {
  const [country, setCountry] = useState<string>("Afghanistan");
  const [city, setCity] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [checkBox, setCheckBox] = useState(subjects);
  const [cities, setCities] = useState<string[]>(countryAndCity[country]);
  const [experienceRange, setExperienceRange] = useState<string>();
  const [ageMin, setAgeMin] = useState<number>(0);
  const [ageMax, setAgeMax] = useState<number>(17);
  const [submitted, setSubmitted] = useState(false);

  const handleCountryChange = (str: string) => {
    setCountry(str);
    setCities(countryAndCity[str]);
  };

  const handleSliderChange = (min: number, max: number) => {
    setAgeMin(min);
    setAgeMax(max);
  };

  const handleFirstNameChange = (str: string) => {
    setFirstName(str);
  };

  const handleLastNameChange = (str: string) => {
    setLastName(str);
  };

  const handleExperienceRangeChange = (str: string) => {
    setExperienceRange(str);
  };

  const handleDifferentGender = (str: string) => {
    setGender(str);
  };

  const handleYearChange = (str: string) => {
    setYear(str);
  };

  const handleCityChange = (str: string) => {
    setCity(str);
  };

  const handleRadioButtonChange = (e: any, str: string) => {
    console.log("clicked");
    let newCheckBox: any = [];
    checkBox.map((elem) => {
      if (elem.subject === str) {
        const currentElem = {
          subject: elem.subject,
          checked: !elem.checked,
        };
        newCheckBox.push(currentElem);
      } else {
        newCheckBox.push(elem);
      }
    });
    setCheckBox(newCheckBox);
    console.log(checkBox);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    axios
      .post("https://public.devsfair.com/api/profile", {
        firstName,
        lastName,
        year,
        country,
        city,
        gender,
        experienceRange,
        checkBox,
        ageMin,
        ageMax,
      })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="middle-section">
        {/* personal info */}
        <div className="profile-text">My Profile</div>
        <div className="personal-info">Personal Info</div>
        <form>
          <div className="input-block">
            <label className="input-label light-text">
              My first name is *
              <input
                value={firstName}
                className="input-text"
                onChange={(e) => handleFirstNameChange(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="input-block">
            <label className="input-label light-text">
              My last name is *
              <input
                className="input-text "
                value={lastName}
                onChange={(e) => handleLastNameChange(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="input-block">
            <label className="input-label light-text">
              I live in *
              <div className="selector">
                <div>
                  <select
                    className="option-box"
                    onChange={(e) => handleCountryChange(e.target.value)}
                  >
                    {countries.map((country) => (
                      <option>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className="option-box"
                    onChange={(e) => handleCityChange(e.target.value)}
                  >
                    {cities.map((city) => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </label>
          </div>
          <div className="input-block">
            <div className="selector">
              <div>
                <label className="input-label light-text">
                  Year of my birth
                  <div>
                    <select
                      className="option-box"
                      onChange={(e) => handleYearChange(e.target.value)}
                    >
                      {years.map((year) => (
                        <option>{year}</option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
              <div>
                <label className="input-label light-text">
                  My gender
                  <div>
                    <select
                      className="option-box"
                      onChange={(e) => handleDifferentGender(e.target.value)}
                    >
                      {genders.map((gender) => (
                        <option>{gender}</option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* professional info */}
          <div className="professional-info">Professional info</div>
          <div className="light-text">My subjects are</div>
          <div className="radiobuttons-container">
            {checkBox.map((elem) => (
              <label className="container radio-label">
                <input
                  type="checkbox"
                  onChange={(e) => handleRadioButtonChange(e, elem.subject)}
                ></input>
                <span className="check-subject">{elem.subject} </span>
              </label>
            ))}
          </div>
          <div className="work-with light-text">
            I work with children of age
          </div>
          <div className="range-slider">
            <MultiRangeSlider
              min={0}
              max={17}
              onChange={({ min, max }: { min: number; max: number }) =>
                handleSliderChange(min, max)
              }
            />
          </div>
          <div className="light-text">My work experience as an educator is</div>
          <select
            className="option-box"
            style={{ width: "100%" }}
            onChange={(e) => handleExperienceRangeChange(e.target.value)}
          >
            {experienceRanges.map((range) => (
              <option>{range}</option>
            ))}
            <option></option>
          </select>
          <button
            className={`save-btn ${submitted ? "btn-submitted" : ""}`}
            onClick={(e) => handleClick(e)}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default MiddleSection;
