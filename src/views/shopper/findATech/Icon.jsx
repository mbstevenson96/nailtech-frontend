import L from 'leaflet';
import Helena from '../../../assets/helenaProfilePic.jpg'
import Aaron from '../../../assets/aaronProfilePic.jpg'
import Samantha from '../../../assets/samanthaProfilePic.jpg'
import Julissa from '../../../assets/julissaProfilePic.jpg'
import classes from './Icon.module.css'

const iconAnchorPoint = [30, 75]; // Example coordinates, adjust as needed
const popupAnchorPoint = [0, -75];
const iconImages =
{
  helena: Helena,
  aaron: Aaron
}
const iconPerson = new L.Icon({
  iconUrl: Helena,
  iconRetinaUrl: Helena,
  iconAnchor: iconAnchorPoint,
  popupAnchor: popupAnchorPoint,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: classes.roundedIcon,
});

export { iconPerson };
