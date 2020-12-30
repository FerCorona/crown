import Switch from './Switch';
import CheckBox from './CheckBox';
import DropDown from './DropDown';
import RadioButton from './RadioButton';
import Table from './Table';
import Loader from './Loader';
import Modal from './Modal';
import Card from './Card';
import Button from './Button';
import InputText from './InputText';
import Label from './Label';
import Image from './Image';

import { LABEL_SIZE, LABEL_WEIGHT, IMAGE_SIZE, COLOR } from './Common/Constants';

const Constants = {
  LABEL_SIZE,
  LABEL_WEIGHT,
  IMAGE_SIZE,
  COLOR
};

require('./Common/Styles/colors.scss');
require('./Common/Styles/main.scss');

export {
  Switch,
  CheckBox,
  DropDown,
  RadioButton,
  Table,
  Loader,
  Modal,
  Card,
  Button,
  InputText,
  Label,
  Image,
  Constants
};