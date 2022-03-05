/*
 * @Author: misterzhou
 * @Date: 2022-03-05 13:30:48
 * @LastEditTime: 2022-03-05 13:33:46
 * @LastEditors: misterzhou
 * @FilePath: /mz-music/src/api/service.ts
 * @Description:
 */
import request from '@/utils/request'
import URLS from './url'
// 获取随机音乐信息
export const fetchRandMusic = () => {
  return request.get(URLS.randomMusic)
}
