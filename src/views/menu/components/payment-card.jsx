/* eslint-disable react/prop-types */
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../../../components";

const stripePromise = loadStripe(
  "pk_test_51KoUyGKW345678903G9QNXXiWcg7WpBnHJ9PCHsHG2H7YFlXEdLzkq1mYtnxH0OIN1I3A7RVaclESwfx77Xw8gOVwgacXcfnZ00d3DYOQtf"
);

export const AddPaymentCard = ({ handlePayNow }) => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentCard handlePayNow={handlePayNow} />
      </Elements>
    </>
  );
};

const PaymentCard = ({ handlePayNow }) => {
  const [complete, setComplete] = useState({
    cardNumber: false,
    cvv: false,
    expiryDate: false,
  });

  const stripe = useStripe();
  const elements = useElements();
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "var(--color-danger-dark)",
        },
      },
    }),
    []
  );

  const handleChangeCard = useCallback((isComplete, name) => {
    setComplete((prev) => ({ ...prev, [name]: isComplete }));
  }, []);

  const cvvConfigOptions = {
    ...options,
    placeholder: "....",
  };

  const onSubmitCard = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const tokenDetails = await stripe.createToken(
      elements.getElement(CardNumberElement)
    );

    handlePayNow();
    console.log(tokenDetails);
  };

  const manageBtnDisabled = useMemo(() => {
    const { cardNumber, cvv, expiryDate } = complete;
    if (cardNumber && cvv && expiryDate && stripe) {
      return false;
    }
    return true;
  }, [complete, stripe]);

  return (
    <>
      <div className="shadow-sm pt-4 rounded-lg  m-auto">
        <form className="form" onSubmit={onSubmitCard}>
          <div className=" mb-4">
            <div className="text-xs">Card number</div>
            <div className="border p-3 rounded-lg">
              <CardNumberElement
                onChange={(e) => handleChangeCard(e.complete, "cardNumber")}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mb-3 flex-1 ">
              <div className="text-xs">Expiry date</div>
              <div className="border p-3 rounded-lg">
                <i className="ri-calendar-line payment-form__icon" />
                <CardExpiryElement
                  onChange={(e) => handleChangeCard(e.complete, "expiryDate")}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs">
                <span>CVV/CVC</span> <i className="" />
              </div>
              <div className="border p-3 rounded-lg">
                <i className="" />
                <CardCvcElement
                  options={cvvConfigOptions}
                  onChange={(e) => handleChangeCard(e.complete, "cvv")}
                />
              </div>
            </div>
          </div>

          <Button
            label="Pay"
            styles="mt-4 w-full"
            disabled={manageBtnDisabled}
          />
        </form>
      </div>
    </>
  );
};
