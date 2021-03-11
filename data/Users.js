import React from 'react';


export default function Users ({users}) {
    console.log(users.fields.Latitude);
    return(
        <div>
            <p>{users.fields.Latitude}</p>
            <div>
                <img src={users.fields.Attachments[0].url} />
            </div>
        </div>
    );
}

//<p>{users.fields.Status}</p> FUNCIONANDO
