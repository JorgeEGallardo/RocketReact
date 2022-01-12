import { gql } from '@apollo/client';
const mutation = gql`
mutation Mutation($firstName: String, $secondName: String, $fatherLastName: String, $motherLastName: String, $birthday: String, $phone: String, $email: String) {
  addPerson(FirstName: $firstName, SecondName: $secondName, FatherLastName: $fatherLastName, MotherLastName: $motherLastName, Birthday: $birthday, Phone: $phone, Email: $email) {
    FirstName
    Phone
    Email
    Birthday
    FatherLastName
    MotherLastName
    SecondName
  }
}
  `;
  export default mutation