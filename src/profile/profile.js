import React from 'react';

// function Fullname(props) {
//     return <h1>{props.name}</h1>;
//    }

// function Bio(props) {
// return <p>{props.name}</p>;
// }

// function Proffession(props){
//     return <p>{props.name}</p>
// }

function Data(props){
    return [ <h1>{props.fullName}</h1>,
             <p>{props.bio}</p>,
             <p>{props.proffesion}</p>,
]
}
   
   

const Profile = () => {
    return (
        <div>
            {/* <Fullname name="pope kleib"/>
            <Bio name="A sound ,ind lives in a sound body"/>
            <Proffession name="Student"/> */}
            <Data fullName="Pope kleib" bio="A sound mind, lives in a sound body" proffesion="Student"/>
        </div>
    );
};



export default Profile;