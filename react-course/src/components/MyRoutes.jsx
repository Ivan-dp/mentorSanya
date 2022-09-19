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
  RestApiTest,
} from '../pages';
import { PostList } from './';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/mentorSanya/" element={<Home />} />
      <Route path="/mentorSanya/info" element={<Info />} />
      <Route path="/mentorSanya/togglesquare" element={<ToggleSquare />} />
      <Route
        path="/mentorSanya/posts"
        element={
          <Posts>
            <PostList />
          </Posts>
        }
      />
      <Route path="/mentorSanya/*" element={<NotFound />} />
      <Route path="/mentorSanya/requestinput" element={<RequestInput />} />
      <Route path="/mentorSanya/todo" element={<ToDo />} />
      <Route path="/mentorSanya/newpage/*" element={<NewPage />} />
      <Route path="/mentorSanya/newpage/all/:listid" element={<ItemPage />} />
      <Route path="/mentorSanya/restapitest" element={<RestApiTest />} />
    </Routes>
  );
};

export { MyRoutes };
