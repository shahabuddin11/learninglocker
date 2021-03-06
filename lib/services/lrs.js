import Promise from 'bluebird';
import Lrs from 'lib/models/lrs';

/* eslint-disable import/prefer-default-export*/
export const updateStatementCountsInOrg = async (organisationId) => {
  const lrsList = await Lrs.find({ organisation: organisationId });
  await Promise.map(lrsList, Lrs.updateStatementCount);
};

export const decrementStatementCount = async (lrsId) => {
  const lrs = await Lrs.findOne({ _id: lrsId });
  if (lrs) {
    await Lrs.decrementStatementCount(lrs);
  }
};
