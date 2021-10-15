import axios from 'axios';
import { ContentInfo } from '../types/content.type';

export const getContentNazerke = () => {
    return axios.get<ContentInfo[]>("../../json/nazerke.json");
}

export const getContentRaikhan = () => {
    return axios.get<ContentInfo[]>("../../json/raikhan.json");
}

export const getContentAliya = () => {
    return axios.get<ContentInfo[]>("../../json/aliya.json");
}