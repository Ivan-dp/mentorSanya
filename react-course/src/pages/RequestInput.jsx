import { React, useState } from 'react';

const RequestInput = () => {
  const [id, setId] = useState();

  return (
    <div>
      <form>
        <label>
          Имя:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export { RequestInput };
