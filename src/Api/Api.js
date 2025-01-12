import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const response = axios.get(`${process.env.BASE_API_URL}/simple/price`)
