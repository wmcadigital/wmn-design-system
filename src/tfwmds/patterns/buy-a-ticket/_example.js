const buyATicketJS = () => {
  const onSubmitForm = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    let queryString = new URLSearchParams(data).toString();
    queryString = queryString.replace('useBus=', '');
    queryString = queryString.replace('useTrain=', '');
    queryString = queryString.replace('useTram=', '');
    window.location.href = `https://legacy.wmnetwork.co.uk/tickets/#/?${queryString}`;
  };

  const buyATicketComponents = document.querySelectorAll('.tfwmds-buy-a-ticket');

  buyATicketComponents.forEach(buyATicketComponent => {
    buyATicketComponent.addEventListener('submit', onSubmitForm);
  });
};

export default buyATicketJS;
