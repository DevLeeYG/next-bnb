// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import styled from 'styled-components';
import { dayList, monthList, yearList } from '../../lib/staticData';
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg';
import palette from '../../styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import Selector from '../common/Selector';

const Container = styled.form`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;
  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  svg {
    position: absolute;
    right: 11px;
    top: 16px;
  }
  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
  .sign-up-birthday-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }
  .sign-up-modal-birthday-seletors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-glow: 1;
      width: 33.3333%;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 33.3333%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.3333%;
    }
  }
  .sign-up-modal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    borer-bottom: 1px solid ${palette.gray_eb};
  }
`;

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  //
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  console.log(birthDay, birthMonth, birthYear);

  //* ???????????? ??????
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const disabledMoths = ['???'];
  const disabledDays = ['???'];
  const disabledYears = ['???'];

  //* ????????? ?????? ?????????
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //* ?????? ?????? ?????? ???
  const onChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e?.target.value);
  };

  //* ??? ?????? ???
  const onChangeFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  //* ???????????? ?????? ???
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  /**
   *
   * @param blank
   */

  //* ???????????? ??? ?????? ???
  const onChangeBirthMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(e.target.value);
  };
  //* ???????????? ??? ?????? ???
  const onChangeBirthDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(e.target.value);
  };
  //* ???????????? ??? ?????? ???
  const onChangeBirthYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(e.target.value);
  };

  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />

      <div className="input-wrapper">
        <Input
          placeholder="????????? ??????"
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          icon={<MailIcon />}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="??????(??? :??????)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="???(??? :???)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div className="input-wrapper sign-up-password-input-wrapper">
        <Input
          placeholder="???????????? ????????????"
          type={hidePassword ? 'password' : 'text'}
          icon={
            hidePassword ? (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <p className="sign-up-birthday-label">??????</p>
      <p className="sign-up-modal-birthday-info">
        ??? 18??? ????????? ????????? ???????????? ????????? ??? ????????????. ????????? ??????
        ??????????????? ??????????????? ???????????? ????????????.
      </p>
      <div className="sign-up-modal-birthday-seletors">
        <div className="sign-up-modal-birthday-month-selector">
          <Selector
            options={monthList}
            disabledOptions={disabledMoths}
            defaultValue="???"
            value={birthMonth}
            onChange={onChangeBirthMonth}
          />
        </div>
        <div className="sign-up-modal-birthday-day-selector">
          <Selector
            options={dayList}
            disabledOptions={disabledDays}
            defaultValue="???"
            value={birthDay}
            onChange={onChangeBirthDay}
          />
        </div>
        <div className="sign-up-modal-birthday-year-selector">
          <Selector
            options={yearList}
            disabledOptions={disabledYears}
            defaultValue="???"
            value={birthYear}
            onChange={onChangeBirthYear}
          />
        </div>
      </div>
      <div className="sign-up-modal-submit-button-wrapper">
        <Button type="submit">????????????</Button>
      </div>
    </Container>
  );
};

export default SignUpModal;
