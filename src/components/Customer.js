
function Customer(pp) {
    return(
        <div>
            <CustomerProfile
                id={pp.id}
                name={pp.name}
            />
            <CustomerInfo
                birthday={pp.birthday}
                gender={pp.gender}
                job={pp.job}
            />
        </div>
    );
}

function CustomerProfile(pp) {
    return(
        <div>
            <h2>{pp.name}({pp.id})</h2>
        </div>
    )
}

function CustomerInfo(pp) {
    return(
        <div>
            <p>{pp.birthday}</p>
            <p>{pp.gender}</p>
            <p>{pp.job}</p>
        </div>
    )
}

export default Customer