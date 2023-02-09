import * as data from '../../data-test.json';


export default function jsonReader(){
  const obj = JSON.stringify(data);
  const actualData = JSON.parse(obj);
  return actualData;
}