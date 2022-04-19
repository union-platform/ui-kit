// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button/Button';
import CloseIcon18 from '../Icons/18pt/CloseIcon18/CloseIcon18';
import TextInput from '../TextInput/TextInput';

import Modal from './Modal';
import ModalClose from './ModalClose/ModalClose';
import ModalContent from './ModalContent/ModalContent';
import ModalDescription from './ModalDescription/ModalDescription';
import ModalTitle from './ModalTitle/ModalTitle';
import ModalTrigger from './ModalTrigger/ModalTrigger';

export default {
  title: 'Union-UI/Modal',
  component: Modal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37103',
    },
  },
} as ComponentMeta<typeof Modal>;

const TextInputContainer = styled('div', {
  marginBottom: 24,
});

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <ModalTrigger><Button variant="primary">Press</Button></ModalTrigger>
    <ModalContent>
      <ModalTitle>Change your data</ModalTitle>
      <ModalDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </ModalDescription>
      <TextInputContainer>
        <TextInput fullWidth type="phone" placeholder="Your phone number" />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput fullWidth type="text" placeholder="Your name" />
      </TextInputContainer>
      <Button variant="primary" fullWidth>Save changes</Button>
      <ModalClose><CloseIcon18 /></ModalClose>
    </ModalContent>
  </Modal>
);
export const Primary = Template.bind({});
Primary.args = {
};
