import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Info,
  ToggleSquare,
  Posts,
  NotFound,
  RequestInput,
  ToDo,
  NewPage,
  ItemPage,
} from '../pages';
import { PostList } from './';
import { todoItems } from '../consts';

const MyRoutes = () => {
  const id = 0;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/togglesquare" element={<ToggleSquare />} />
      <Route
        path="/posts"
        element={
          <Posts>
            <PostList />
          </Posts>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="requestinput" element={<RequestInput />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/newpage/*" element={<NewPage />} />
      <Route path={'/newpage/' + id} element={<ItemPage item={todoItems[id]} />} />
    </Routes>
  );
};

export { MyRoutes };
