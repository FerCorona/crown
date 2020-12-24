import Button from './Button';
import InputText from './InputText';
import Label from './Label';
import Switch from './Switch';
import CheckBox from './CheckBox';
import Image from './Image';
import DropDown from './DropDown';
import RadioButton from './RadioButton';
import Table from './Table';
import Loader from './Loader';
import ProgressBar from './ProgressBar';
import Modal from './Modal';
import NavBar from './NavBar';
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
  Button,
  InputText,
  Label,
  Switch,
  CheckBox,
  Image,
  DropDown,
  RadioButton,
  Table,
  Loader,
  ProgressBar,
  Modal,
  NavBar,
  Constants
};