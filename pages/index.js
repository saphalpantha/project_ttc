import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import MainPage from '../components/MainPage/MainPage'
import Hero from '../components/Hero/Hero'
import { useSession } from 'next-auth/react'



export default function Home() {
  const {data:session} = useSession();
  console.log(session,'from main page')
  return (
    <>
    <MainPage/>
    </>
  )
}
