import React from "react";

function User({userData})
{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

function List()
{
    const users = [
        {name: "유재석", email: "ryu@gmail.com"},
        {name: "김종국", email: "kim@gmail.com"},
        {name: "하하", email: "ha@gmail.com"}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default List;