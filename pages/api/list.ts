type Req = {
  body: {
    [key: string]: any
  },
  method: string,
}

const list = (req: Req, res: any) => {
  /*
  Get the playlist from sending a request to a google api
  */

  // only allow POST method
  if(req.method !== 'POST') {
    res.status(405)
    return res.send({error: 'Method not allowed'})
  }

  res.send(req.body)
}

export default list
