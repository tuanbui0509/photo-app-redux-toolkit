import React from 'react'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images.js';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removePhoto } from 'features/Photo/PhotoSlice';
import PhotoList from 'features/Photo/components/PhotoList';

function MainPage() {
    const photos = useSelector(state => state.photos)
    const history = useHistory()
    const dispatch = useDispatch()

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    )
}

export default MainPage
