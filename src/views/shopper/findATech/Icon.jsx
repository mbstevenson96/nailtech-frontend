import L from 'leaflet';
import profilePic1 from '../../../assets/profilePic1.jpg.png';
import classes from './Icon.module.css'

const iconAnchorPoint = [30, 75]; // Example coordinates, adjust as needed
const popupAnchorPoint = [0, -75];

const iconPerson = new L.Icon({
  iconUrl: profilePic1,
  iconRetinaUrl: profilePic1,
  iconAnchor: iconAnchorPoint,
  popupAnchor: popupAnchorPoint,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: classes.roundedIcon,
});

export { iconPerson };
