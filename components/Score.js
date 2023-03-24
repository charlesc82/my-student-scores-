function Score({ scores }) {
  // console.log(studentArr)

  return (
    <>
      <ul>
        {scores.map((xArr, index) => (
          <li key={crypto.randomUUID()}>
            {xArr.date}: {xArr.score}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Score;
