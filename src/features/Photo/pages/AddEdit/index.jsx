import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Banner from 'components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/PhotoSlice';
import { useHistory, useParams } from 'react-router';
import { randomNumber } from 'utils/common';
function AddEditPage(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams();
    const isAddMode = !photoId;
    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
    });
    console.log({ photoId, editedPhoto, isAddMode })
    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: '',
        }
        : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit: ', values);

            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    }
                    const action = addPhoto(newPhoto);
                    console.log({ action });
                    dispatch(action);
                } else {
                    // Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history.push('/photos');
                resolve(true);
            }, 2000);
        });
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit} />
            </div>
        </div>
    )
}



AddEditPage.propTypes = {

}

export default AddEditPage

