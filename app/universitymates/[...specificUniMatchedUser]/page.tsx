'use client'

export default function UniversityMatchedUserProfile({
  params,
}: {
  params: { value: string };
}) {
  const codeforceusername = params.value;

  console.log(codeforceusername);

  // you CAN fetch data here directly
//   const userRes = await fetch(
//     `https://codeforces.com/api/user.info?handles=${codeforceusername}`
//   );

//   const userData = await userRes.json();

  return (
    <div>
      <h1>Matched User: {codeforceusername}</h1>
     
    </div>
  );
}
