// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg';
import Input from '../common/Input';

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
`;

const SignUpModal: React.FC = () => (
  <Container>
    <CloseXIcon className="modal-close-x-icon" />

    <div className="input-wrapper">
      <Input
        placeholder="이메일 주소"
        type="email"
        name="email"
        icon={<MailIcon />}
      />
    </div>
    <div className="input-wrapper">
      <Input placeholder="이름(예 :영광)" icon={<PersonIcon />} />
    </div>
    <div className="input-wrapper">
      <Input placeholder="성(예 :이)" icon={<PersonIcon />} />
    </div>
    <div className="input-wrapper">
      <Input
        placeholder="비밀번호 설정하기"
        type="password"
        icon={<OpenedEyeIcon />}
      />
    </div>
  </Container>
);

export default SignUpModal;
