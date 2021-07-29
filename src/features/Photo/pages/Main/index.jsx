import React from 'react'
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images.js';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
function MainPage() {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    )
}

export default MainPage
