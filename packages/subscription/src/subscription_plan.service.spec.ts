import 'reflect-metadata';
import { DatabaseService } from './database/database.service';
import { servicesContainer } from './inversify.config';
import {
  CreateSubscriptionPlanPayloadError,
  DeleteSubscriptionPlanError,
  FindAllSubscriptionPlanPayloadError,
  FindSubscriptionPlanPayloadError,
  UpdateSubscriptionPayloadError,
  ValidateDayError,
  ValidateMonthError,
  ValidateWeekError,
  ValidateYearError,
} from './subscription_plan.seed';
import { SubscriptionPlanService } from './subscription_plan.service';

describe('Subscription Plan', () => {
  let subscriptionPlanService: SubscriptionPlanService;
  beforeEach(async () => {
    servicesContainer.snapshot();
    subscriptionPlanService = servicesContainer.get<SubscriptionPlanService>(
      SubscriptionPlanService,
    );
  });
  afterEach(() => {
    servicesContainer.restore();
  });
  describe('Add subscription plan', () => {
    it('should validate payload to error', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: '        ',
          price: 0,
          invoice_duration: 'DAY',
          invoice_period: 1000,
        }
      */
      await subscriptionPlanService
        .create({
          name: '        ',
          price: 0,
          invoice_duration: 'DAY',
          invoice_period: 1000,
        })
        .catch(e => {
          expect(e.message).toEqual(CreateSubscriptionPlanPayloadError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate payload to success', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
        name: 'Sample Plan',
        price: 10,
        invoice_duration: 'DAY',
        invoice_period: 10,
        }
      Mock:
        findOne => undefined
        create => {id:1}
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve(undefined));
      const find = jest
        .spyOn(dbService, 'create')
        .mockImplementation(() => Promise.resolve({ id: '1' }) as any);
      await subscriptionPlanService.create({
        name: 'Sample Plan',
        price: 10,
        invoice_duration: 'DAY',
        invoice_period: 10,
      });
      expect(find).toBeCalledWith(
        expect.objectContaining({
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }),
      );
    });
    it('should validate subscription plan period for DAY ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 1000,
        }
      */
      await subscriptionPlanService
        .create({
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 1000,
        })
        .catch(e => {
          expect(e.message).toEqual(ValidateDayError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate subscription plan period for WEEK ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'WEEK',
          invoice_period: 10,
        }
      */
      await subscriptionPlanService
        .create({
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'WEEK',
          invoice_period: 10,
        })
        .catch(e => {
          expect(e.message).toEqual(ValidateWeekError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate subscription plan period for MONTH ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'MONTH',
          invoice_period: 15,
        }
      */
      await subscriptionPlanService
        .create({
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'MONTH',
          invoice_period: 15,
        })
        .catch(e => {
          expect(e.message).toEqual(ValidateMonthError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate subscription plan period for YEAR ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'YEAR',
          invoice_period: 6,
        }
      */
      await subscriptionPlanService
        .create({
          name: 'Sample Payload',
          price: 10,
          invoice_duration: 'YEAR',
          invoice_period: 6,
        })
        .catch(e => {
          expect(e.message).toEqual(ValidateYearError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate duplicate Error message ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Test 1',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }
      Mock:
        findOne => { id: '1' }
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve({ id: '1' }) as any);
      await subscriptionPlanService
        .create({
          name: 'Test 1',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        })
        .catch(e => {
          expect(e.message).toEqual('Subscription Plan: already exists');
          expect(e.title).toEqual('CONFLICT_ERROR');
        });
    });
    it('should add subscription plan', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }
      Mock:
        findOne => undefined
        create => {id:1}
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);
      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve(undefined));
      const find = jest
        .spyOn(dbService, 'create')
        .mockImplementation(() => Promise.resolve({ id: '1' }) as any);
      await subscriptionPlanService.create({
        name: 'Sample Plan',
        price: 10,
        invoice_duration: 'DAY',
        invoice_period: 10,
      });
      expect(find).toBeCalledWith(
        expect.objectContaining({
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }),
      );
    });
  });
  describe('Update subscription plan', () => {
    it('should validate payload to error', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: '        ',
          price: 0,
          invoice_duration: 'DAY',
          invoice_period: 1000,
        },
        { id: '12-A' },
      */
      await subscriptionPlanService
        .update(
          {
            name: '        ',
            price: 0,
            invoice_duration: 'DAY',
            invoice_period: 1000,
          },
          { id: '12-A' },
        )
        .catch(e => {
          expect(e.message).toEqual(UpdateSubscriptionPayloadError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate payload to success', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }
      Mock:
        findOne => undefined
        update => [{ id: '1' }, 1]
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve(undefined));
      const updateFn = jest
        .spyOn(dbService, 'update')
        .mockImplementation(() => Promise.resolve([{ id: '1' }, 1]) as any);
      await subscriptionPlanService.update(
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        },
        { id: '12-A' },
      );
      expect(updateFn).toBeCalledWith(
        expect.objectContaining({
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }),
        expect.objectContaining({
          id: '12-A',
        }),
      );
    });
    it('should validate duplicate Error message ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        },
        { id: '12-A' }
      Mock:
        findOne =>  id: 1 }
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve({ id: 1 }));

      await subscriptionPlanService
        .update(
          {
            name: 'Sample Plan',
            price: 10,
            invoice_duration: 'DAY',
            invoice_period: 10,
          },
          { id: '12-A' },
        )
        .catch(e => {
          expect(e.message).toEqual('Subscription Plan: already exists');
          expect(e.title).toEqual('CONFLICT_ERROR');
        });
    });
    it('should update subscription plan', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        },
        { id: '12-A' }
        findOne => undefined
        update => [{ id: '1' }, 1]
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve(undefined));
      const updateFn = jest
        .spyOn(dbService, 'update')
        .mockImplementation(() => Promise.resolve([{ id: '1' }, 1]) as any);
      await subscriptionPlanService.update(
        {
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        },
        { id: '12-A' },
      );
      expect(updateFn).toBeCalledWith(
        expect.objectContaining({
          name: 'Sample Plan',
          price: 10,
          invoice_duration: 'DAY',
          invoice_period: 10,
        }),
        expect.objectContaining({
          id: '12-A',
        }),
      );
    });
  });
  describe('Delete subscription plan', () => {
    it('should validate payload to error', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id: '0',
        }
      */
      await subscriptionPlanService.delete({ id: '0' }).catch(e => {
        expect(e.message).toEqual(DeleteSubscriptionPlanError);
        expect(e.title).toEqual('PAYLOAD_ERROR');
      });
    });
    it('should validate payload to success', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id:  '31-A',
        }
      Mock:
        delete => [{ id: '31-A' }, 1]
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'delete')
        .mockImplementation(() => Promise.resolve([{ id: '31-A' }, 1]) as any);
      await subscriptionPlanService.delete({
        id: '31-A',
      });
      expect(find).toBeCalledWith(expect.objectContaining({ id: '31-A' }));
    });
    it('should validate not found Error message ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id:'31-A',
        }
      Mock:
        delete => [undefined, 0]
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'delete')
        .mockImplementation(() => Promise.resolve([undefined, 0]) as any);
      await subscriptionPlanService
        .delete({
          id: '31-A',
        })
        .catch(e => {
          expect(e.message).toEqual('No Subscription Plan found');
          expect(e.title).toEqual('NOT_FOUND_ERROR');
        });
    });
    it('should delete subscription plan', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id: '31-A',
        }
      Mock:
        delete => [{ id: '31-A' }, 1]
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'delete')
        .mockImplementation(() => Promise.resolve([{ id: '31-A' }, 1]) as any);
      await subscriptionPlanService.delete({
        id: '31-A',
      });
      expect(find).toBeCalledWith(expect.objectContaining({ id: '31-A' }));
    });
  });
  describe('Get subscription plan', () => {
    it('should validate payload to error', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id: '0'
        }
      */
      await subscriptionPlanService.findOne({ id: '0' }).catch(e => {
        expect(e.message).toEqual(FindSubscriptionPlanPayloadError);
        expect(e.title).toEqual('PAYLOAD_ERROR');
      });
    });
    it('should validate payload to success', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findOne => { id: '31-A' }
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve({ id: '31-A' }) as any);
      await subscriptionPlanService.findOne({ id: '31-A' });
      expect(find).toBeCalledWith(
        expect.objectContaining({
          id: '31-A',
        }),
      );
    });
    it('should validate not found Error message ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findOne => {}
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);
      jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve({}));

      await subscriptionPlanService.findOne({ id: '31-A' }).catch(e => {
        expect(e.message).toEqual('No Subscription Plan found');
        expect(e.title).toEqual('NOT_FOUND_ERROR');
      });
    });
    it('should get subscription plan', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findOne => { id: '31-A' }
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'findOne')
        .mockImplementation(() => Promise.resolve({ id: '31-A' }) as any);
      await subscriptionPlanService.findOne({ id: '31-A' });

      expect(find).toBeCalledWith(
        expect.objectContaining({
          id: '31-A',
        }),
      );
    });
  });
  describe('Get All subscription plan', () => {
    it('should validate payload to error', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id: '0'
        }
      */
      await subscriptionPlanService
        .findAll({ id: '0', limit: 1001 })
        .catch(e => {
          expect(e.message).toEqual(FindAllSubscriptionPlanPayloadError);
          expect(e.title).toEqual('PAYLOAD_ERROR');
        });
    });
    it('should validate payload to success', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findAll => { edges: [{ id: '31-A' }]}
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'findAll')
        .mockImplementation(
          () => Promise.resolve({ edges: [{ id: '31-A' }] }) as any,
        );
      await subscriptionPlanService.findAll({ id: '31-A' });
      expect(find).toBeCalledWith(
        expect.objectContaining({
          id: '31-A',
        }),
        10,
        0,
      );
    });
    it('should validate not found Error message ', async () => {
      expect.assertions(2);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findAll => { edges: [], page_info: {} }
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      jest
        .spyOn(dbService, 'findAll')
        .mockImplementation(
          () => Promise.resolve({ edges: [], page_info: {} }) as any,
        );
      await subscriptionPlanService.findOne({ id: '31-A' }).catch(e => {
        expect(e.message).toEqual('No Subscription Plan found');
        expect(e.title).toEqual('NOT_FOUND_ERROR');
      });
    });
    it('should get all subscription plan', async () => {
      expect.assertions(1);
      /**
      Payload =>
        {
          id: '31-A'
        }
      Mock:
        findAll => { edges: [{ id: '31-A' }]}
      */
      const dbService = servicesContainer.get<DatabaseService>(DatabaseService);

      const find = jest
        .spyOn(dbService, 'findAll')
        .mockImplementation(
          () => Promise.resolve({ edges: [{ id: '31-A' }] }) as any,
        );
      await subscriptionPlanService.findAll({ id: '31-A' });
      expect(find).toBeCalledWith(
        expect.objectContaining({
          id: '31-A',
        }),
        10,
        0,
      );
    });
  });
});
