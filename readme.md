Yotv WebSite Request Url

##

For register user, a request is made to the api with the number of the user
like so :::::: http://yotv.api.user/api-key/075882877

    If the user is already registered ,
        a prompt for the user to select which payment plan he will take is rather made on the web
    else
        the number is processed to be regitered and a pin code is sent to the number.

##

For subscribe for a plan , a request is made to the api with the number as well the price for the plan AND wait for the result like so ::
http://yotv.api.user/api-key/07566616637/plan-number

    If the user is not registered ,
        It would better if we register him there and then and send the pin followed by the paymnet prompt on his phone.
    else
        The request is processed and the user is prompted to pay for the plan on the mobile.
