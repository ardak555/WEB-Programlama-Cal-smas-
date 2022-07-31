const name="Arda";
const department="Software";
const salary=20000;

const value=`
İsim:${name}\nDepartman:${department}\nSalary:${salary}
`;

console.log(value);

const html=`
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
    </ul>
`;

document.body.innerHTML=html;