import { rest } from 'msw'
import { allCards, oneCard } from './cards'
export const handlers = [
  rest.get(`${process.env.VUE_APP_API}/bnet/cards`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...allCards }))
  }),

  rest.get(`${process.env.VUE_APP_API}/bnet/cards/*`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...oneCard }))
  })
]
