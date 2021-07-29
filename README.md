# Mini Project: Photo App
## Setup environment
Github Project: https://github.com/paulnguyen-mn/redux-photo-app

## 1. Setup ReactJS App via Create React App
Link: https://create-react-app.dev/docs/getting-started/

## 2. Add SCSS support
npm i --save-dev node-sass
## 3. Add react router
npm i --save react-router-dom
## 4. Add UI lib
npm i --save reactstrap

## 5. Other libraries
npm install formik --save
npm install --save react-select
jsconfig.json 
## Tổ chức folder
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js

Tổ chức routing

# Custom Field
## Cầu nối giữa UI control và Formik.
## UI control là một controlled component với props:
- name: tên xác định control
- value: giá trị của control
- onChange: trigger hàm này với giá trị mới khi có thay đổi
- onBlur: xác định khi nào thì control này bị touched

```js 
function InputField(props) {
  const {
    field,
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

```
## Random Photo control
Formik
RandomPhotoField cầu nối
RandomPhoto
### RandomPhoto Props

- name
- imageUrl
- onImageUrlChange
- onRandomButtonBlur
- RandomPhotoField
