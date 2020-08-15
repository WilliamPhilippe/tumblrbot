import { Request, Response } from 'express';

import UserServices from '@modules/users/service/UserServices';

async function create(request: Request, response: Response): Promise<Response> {
  const { body } = request;

  const createUser = new UserServices();

  const data = createUser.create(body);

  return response.status(200).json({ user: data });
}

async function getUserInfo(
  request: Request,
  response: Response,
): Promise<Response> {
  const getUser = new UserServices();

  getUser.getBlogInfo(response);

  return response;
}

export default { create, getUserInfo };
