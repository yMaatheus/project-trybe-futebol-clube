import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import matchService from '../../services/match.service';

class MatchController {
  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    let progressValue;
    if (typeof inProgress === 'string') progressValue = inProgress.toLowerCase() === 'true';

    const matches = await matchService.getAll(progressValue);

    res.status(StatusCodes.OK).json(matches);
  };

  create = async (req: Request, res: Response) => {
    const match = await matchService.create(req.body);

    res.status(StatusCodes.CREATED).json(match);
  };
}

export default new MatchController();
