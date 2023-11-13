import React from 'react';
import { Button, Form, Input, message, Divider } from 'antd';
import { Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { LoginUser } from "../../apicalls/users";
import { useEffect } from 'react';
import {SetLoader} from "../../redux/loadersSlice";
const rules = [
  {
    required: true,
    message: "required"
  },
];

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true))
      const response = await LoginUser(values);
      dispatch(SetLoader(false))
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token",response.data);
        window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false))
      message.error(error.message);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className='h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-rose-700 to-slate-900 flex justify-center items-center'>
      <div className='bg-white p-5 rounded w-[450px]'>
        <h1 className='text-threy text-2xl'>
          <div>
            PricePulse - <span className='text-gray-400'>LOGIN</span>
          </div>
        </h1>
        <Divider />
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' name='email' rules={rules}>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={rules}>
            <Input type='password' placeholder='Password' />
          </Form.Item>
          <Button type='primary' htmlType='submit' block>
            Login
          </Button>
          <div className='mt-5 text-center'>
            <span className='text-grey-500'>
              Don't have an account?{" "} <Link to="/register" className='text-secondary'>Register</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
