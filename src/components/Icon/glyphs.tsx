import React from 'react';

export interface IGlyph {
  viewBox: string;
  data: JSX.Element;
}

const GlyphsBase = {
  preview: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M512 146.285714c341.357714 0 512 292.571429 512 365.714286s-170.642286 365.714286-512 365.714286-512-292.571429-512-365.714286 170.642286-365.714286 512-365.714286z m0 66.56a474.697143 474.697143 0 0 0-195.584 40.740572 490.934857 490.934857 0 0 0-140.434286 95.378285 482.523429 482.523429 0 0 0-86.454857 111.177143l-1.097143 2.048-2.194285 4.022857-0.950858 1.974858a359.131429 359.131429 0 0 0-1.462857 2.925714l-1.024 1.974857-0.438857 0.950857-0.950857 1.901714c-3.657143 7.533714-6.582857 14.628571-8.923429 21.138286l-0.438857 1.316572-0.438857 1.243428-0.219428 0.658286-0.365715 1.243428-0.365714 1.170286a101.668571 101.668571 0 0 0-0.731429 2.267429l-0.292571 1.097143-0.292571 1.024-0.219429 1.024-0.219429 0.950857-0.219428 0.950857-0.219429 1.316571L68.315429 512v0.219429l0.292571 1.316571 0.219429 0.877714 0.073142 0.512 0.219429 0.950857 0.219429 1.024 0.292571 1.024 0.292571 1.097143 0.731429 2.194286 0.365714 1.243429 0.365715 1.243428 0.219428 0.658286 0.438857 1.243428 0.438857 1.316572c2.340571 6.436571 5.266286 13.604571 8.923429 21.211428l0.950857 1.828572 0.438857 0.950857 0.950857 1.974857 1.462858 2.925714 1.097142 1.974858 2.121143 4.022857 1.097143 1.974857 2.267429 4.096A482.523429 482.523429 0 0 0 176.054857 675.108571a490.934857 490.934857 0 0 0 140.434286 95.378286A474.697143 474.697143 0 0 0 512 811.227429a474.697143 474.697143 0 0 0 195.584-40.813715 490.934857 490.934857 0 0 0 140.434286-95.378285 482.523429 482.523429 0 0 0 86.454857-111.177143l1.097143-2.048 2.194285-4.022857 0.950858-1.974858 1.462857-2.925714 1.024-1.974857 0.438857-0.950857 0.950857-1.901714c3.657143-7.533714 6.582857-14.628571 8.923429-21.138286l0.438857-1.316572 0.438857-1.243428 0.219428-0.658286 0.365715-1.243428 0.365714-1.170286a101.668571 101.668571 0 0 0 0.731429-2.267429l0.292571-1.097143 0.292571-1.024 0.219429-1.024 0.219429-0.950857 0.219428-0.950857 0.219429-1.316571 0.146285-0.658286v-0.219429l-0.292571-1.316571-0.219429-0.877714-0.073142-0.512-0.219429-0.950857-0.219429-1.024-0.292571-1.024-0.292571-1.097143a105.033143 105.033143 0 0 0-0.731429-2.194286l-0.365714-1.243429-0.365715-1.243428-0.219428-0.658286-0.438857-1.243428-0.438857-1.316572a221.037714 221.037714 0 0 0-8.923429-21.211428l-0.950857-1.828572-0.438857-0.950857-0.950857-1.974857a314.294857 314.294857 0 0 0-1.462858-2.925714l-1.097142-1.974858a343.771429 343.771429 0 0 0-2.121143-4.022857l-1.097143-1.974857a482.523429 482.523429 0 0 0-86.528-111.177143 490.934857 490.934857 0 0 0-140.434286-95.451428A474.697143 474.697143 0 0 0 512 212.772571z m0 99.693715c113.078857 0 204.8 89.234286 204.8 199.460571 0 110.153143-91.721143 199.460571-204.8 199.460571-113.078857 0-204.8-89.234286-204.8-199.460571 0-110.153143 91.721143-199.460571 204.8-199.460571z m0 66.486857c-75.337143 0-136.557714 59.538286-136.557714 132.973714S436.662857 644.973714 512 644.973714c75.337143 0 136.557714-59.538286 136.557714-132.973714S587.337143 379.026286 512 379.026286z"
        p-id="3498"
      ></path>
    ),
  },
  delete: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M928.16 144H736V64a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v80H95.84a32 32 0 0 0 0 64H129.6l77.92 698.656A96 96 0 0 0 302.912 992h418.144a96.032 96.032 0 0 0 95.424-85.344L894.4 208h33.728a32 32 0 0 0 0.032-64zM352 96h320v48H352V96z m400.896 803.552a32 32 0 0 1-31.808 28.448H302.912a32 32 0 0 1-31.808-28.448L193.984 208h636.032l-77.12 691.552z"
          p-id="4327"
        ></path>
        <path
          d="M608 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32zM432 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32z"
          p-id="4328"
        ></path>
      </g>
    ),
  },
  pc: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M832 160 192 160c-38.4 0-64 32-64 64l0 448c0 38.4 32 64 64 64l256 0 0 64L352 800C332.8 800 320 812.8 320 832c0 19.2 12.8 32 32 32l320 0c19.2 0 32-12.8 32-32 0-19.2-12.8-32-32-32L576 800l0-64 256 0c38.4 0 64-32 64-64l0-448C896 192 864 160 832 160zM832 672l-640 0 0-448 640 0 0 0L832 672z"
        p-id="7391"
      ></path>
    ),
  },
  mobile: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M704 160 320 160c-38.4 0-64 25.6-64 64l0 576c0 38.4 25.6 64 64 64l384 0c38.4 0 64-25.6 64-64l0-576C768 185.6 742.4 160 704 160zM588.8 800c0 12.8-12.8 25.6-25.6 25.6L460.8 825.6c-12.8 0-25.6-12.8-25.6-25.6l0-12.8c0-12.8 12.8-25.6 25.6-25.6l102.4 0c12.8 0 25.6 12.8 25.6 25.6L588.8 800zM704 697.6c0 12.8-12.8 25.6-25.6 25.6L345.6 723.2c-12.8 0-25.6-12.8-25.6-25.6L320 249.6c0-12.8 12.8-25.6 25.6-25.6l332.8 0c12.8 0 25.6 12.8 25.6 25.6L704 697.6z"
        p-id="8220"
      ></path>
    ),
  },
  input: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M768 153.6a102.4 102.4 0 0 1 102.4 102.4v512a102.4 102.4 0 0 1-102.4 102.4H256a102.4 102.4 0 0 1-102.4-102.4V256a102.4 102.4 0 0 1 102.4-102.4h512z m0 51.2H256a51.2 51.2 0 0 0-50.8416 45.2096L204.8 256v512a51.2 51.2 0 0 0 45.2096 50.8416L256 819.2h512a51.2 51.2 0 0 0 50.8416-45.2096L819.2 768V256a51.2 51.2 0 0 0-45.2096-50.8416L768 204.8z"
          p-id="3563"
        ></path>
        <path
          d="M542.72 307.2a20.48 20.48 0 1 1 0 40.96l-107.52-0.0512V691.2a25.6 25.6 0 1 1-51.2 0V348.1088L276.48 348.16a20.48 20.48 0 1 1 0-40.96h266.24z"
          p-id="3564"
        ></path>
      </g>
    ),
  },
  textarea: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M780.8 153.6c49.4592 0 89.6 40.1408 89.6 89.6v537.6A89.6 89.6 0 0 1 780.8 870.4H243.2A89.6 89.6 0 0 1 153.6 780.8V243.2C153.6 193.7408 193.7408 153.6 243.2 153.6h537.6z m-5.4784 51.2H248.6784c-22.528 0-41.0624 16.896-43.5712 38.7584l-0.3072 5.12v526.6432c0 22.528 16.896 41.0624 38.7584 43.5712l5.12 0.3072h526.6432c22.528 0 41.0624-16.896 43.5712-38.7584l0.3072-5.12V248.6784c0-22.528-16.896-41.0624-38.7584-43.5712l-5.12-0.3072z"
          p-id="3697"
        ></path>
        <path
          d="M435.2 332.8a25.6 25.6 0 0 1 0 51.2h-51.2v128a25.6 25.6 0 0 1-51.2 0V384h-51.2a25.6 25.6 0 1 1 0-51.2h153.6z"
          p-id="3698"
        ></path>
        <path
          d="M512 332.8m25.6 0l204.8 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-204.8 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z"
          p-id="3699"
        ></path>
        <path
          d="M512 486.4m25.6 0l204.8 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-204.8 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z"
          p-id="3700"
        ></path>
        <path
          d="M256 640m25.6 0l460.8 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-460.8 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z"
          p-id="3701"
        ></path>
      </g>
    ),
  },
  radio: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M512 102.4c221.952 0 402.688 176.9472 409.3952 396.8512L921.6 512c0 221.952-176.9472 402.688-396.8512 409.3952L512 921.6c-226.2016 0-409.6-183.808-409.6-409.6 0-221.952 176.9472-402.688 396.8512-409.3952L512 102.4z m0.768 51.2l-11.9296 0.1536A358.7072 358.7072 0 0 0 153.6 512c0 193.536 154.0096 351.6928 345.344 358.1952l12.288 0.2048 11.9296-0.1536c188.8256-5.7856 340.6336-157.952 347.0336-345.1904l0.2048-12.288-0.1536-11.9296a358.7584 358.7584 0 0 0-345.9584-347.0336L512.768 153.6z"
          p-id="3834"
        ></path>
        <path
          d="M512 512m-204.8 0a204.8 204.8 0 1 0 409.6 0 204.8 204.8 0 1 0-409.6 0Z"
          p-id="3835"
        ></path>
      </g>
    ),
  },
  checkbox: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M768 153.6a102.4 102.4 0 0 1 102.4 102.4v512a102.4 102.4 0 0 1-102.4 102.4H256a102.4 102.4 0 0 1-102.4-102.4V256a102.4 102.4 0 0 1 102.4-102.4h512z m0 51.2H256a51.2 51.2 0 0 0-50.8416 45.2096L204.8 256v512a51.2 51.2 0 0 0 45.2096 50.8416L256 819.2h512a51.2 51.2 0 0 0 50.8416-45.2096L819.2 768V256a51.2 51.2 0 0 0-45.2096-50.8416L768 204.8z"
          p-id="3968"
        ></path>
        <path
          d="M640.1024 367.104l-217.8048 218.624-70.144-71.6288a29.4912 29.4912 0 1 0-51.3536 29.3376l89.3952 105.2672a29.5936 29.5936 0 0 0 47.616 5.2736l244.1216-244.992a29.5936 29.5936 0 0 0-0.1024-41.8304 29.3376 29.3376 0 0 0-41.728-0.1024z"
          p-id="3969"
        ></path>
      </g>
    ),
  },
  select: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M768 153.6a102.4 102.4 0 0 1 102.4 102.4v512a102.4 102.4 0 0 1-102.4 102.4H256a102.4 102.4 0 0 1-102.4-102.4V256a102.4 102.4 0 0 1 102.4-102.4h512z m0 51.2H256a51.2 51.2 0 0 0-50.8416 45.2096L204.8 256v512a51.2 51.2 0 0 0 45.2096 50.8416L256 819.2h512a51.2 51.2 0 0 0 50.8416-45.2096L819.2 768V256a51.2 51.2 0 0 0-45.2096-50.8416L768 204.8z"
          p-id="4102"
        ></path>
        <path
          d="M671.9488 392.704a25.6 25.6 0 0 1 41.216 30.0032l-2.7136 3.7376-179.2 204.8a25.6 25.6 0 0 1-34.816 3.4816l-3.6864-3.4816-179.2-204.8a25.6 25.6 0 0 1 35.1744-36.864l3.328 3.1744L512 575.488l159.9488-182.784z"
          p-id="4103"
        ></path>
      </g>
    ),
  },
  date: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M256 204.8v76.8a76.8 76.8 0 0 0 153.6 0V204.8h204.8v76.8a76.8 76.8 0 0 0 69.4272 76.4416L691.2 358.4A76.8 76.8 0 0 0 768 281.6V204.8h51.2a102.4 102.4 0 0 1 102.4 102.4v409.6a102.4 102.4 0 0 1-102.4 102.4H204.8a102.4 102.4 0 0 1-102.4-102.4V307.2a102.4 102.4 0 0 1 102.4-102.4h51.2z m614.4 204.8H153.6v307.2a51.2 51.2 0 0 0 45.2096 50.8416L204.8 768h614.4a51.2 51.2 0 0 0 50.8416-45.2096L870.4 716.8V409.6z"
          p-id="4236"
        ></path>
        <path
          d="M281.6 102.4m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z"
          p-id="4237"
        ></path>
        <path
          d="M640 102.4m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z"
          p-id="4238"
        ></path>
        <path
          d="M421.888 716.8V460.9024h-31.5392a159.744 159.744 0 0 1-32.256 25.088 152.064 152.064 0 0 1-36.5568 15.0528v41.5744c23.6544-6.8096 43.008-17.2032 58.4192-31.1808V716.8h41.9328z m139.776 5.0176c30.464 0 54.1184-7.168 70.9632-21.1456 16.4864-14.336 25.088-32.6144 25.088-55.552 0-15.7696-5.0176-29.7472-14.6944-41.9328a58.112 58.112 0 0 0-30.8224-21.504v-0.7168c12.544-5.0176 21.8624-12.544 28.3136-21.8624 5.7344-8.96 8.6016-20.0704 8.6016-32.9728 0-19.3536-7.5264-35.4816-21.8624-48.384-16.4864-14.6944-38.3488-21.8624-65.5872-21.8624-27.5968 0-49.4592 7.168-65.5872 21.8624a61.5424 61.5424 0 0 0-21.8624 48.384c0 12.9024 2.8672 24.0128 8.6016 32.9728 6.0928 9.3184 15.4112 16.8448 28.3136 21.8624v0.7168a56.832 56.832 0 0 0-30.8224 21.504 63.744 63.744 0 0 0-14.6944 41.9328c0 22.9376 8.2432 41.216 25.088 55.552 16.4864 13.9776 40.1408 21.1456 70.9632 21.1456z m0-153.7536c-17.92 0-30.464-4.3008-38.3488-12.544-6.4512-6.8096-9.6768-16.128-9.6768-27.9552 0-10.3936 3.9424-18.9952 11.8272-26.1632 8.96-8.2432 21.1456-12.1856 36.1984-12.1856s26.88 3.9424 36.1984 12.1856c7.8848 7.168 11.8272 15.7696 11.8272 26.1632 0 11.8272-3.2256 21.1456-9.6768 27.9552-7.8848 8.2432-20.7872 12.544-38.3488 12.544z m0 120.064c-17.5616 0-30.8224-3.9424-40.1408-11.8272a38.0928 38.0928 0 0 1-14.336-31.1808c0-13.6192 4.3008-24.7296 13.6192-32.9728 9.3184-8.6016 22.9376-12.9024 40.8576-12.9024 17.92 0 31.5392 4.3008 41.216 13.2608a42.5984 42.5984 0 0 1 13.2608 32.6144 38.912 38.912 0 0 1-13.6192 30.8224c-10.0352 7.8848-23.6544 12.1856-40.8576 12.1856z"
          p-id="4239"
        ></path>
      </g>
    ),
  },
  password: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M512.704 106.666667a181.333333 181.333333 0 0 1 181.333333 181.333333l-0.021333 53.333333H789.333333a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V405.333333a64 64 0 0 1 64-64h96.682666v-53.333333a181.333333 181.333333 0 0 1 181.333334-181.333333zM789.333333 405.333333H234.666667v384h554.666666V405.333333z m-239.210666 106.666667v170.666667h-64v-170.666667h64zM512.704 170.666667a117.333333 117.333333 0 0 0-117.333333 117.333333V341.333333h234.666666v-53.333333a117.333333 117.333333 0 0 0-117.333333-117.333333z"
        p-id="9083"
      ></path>
    ),
  },
  numerical: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M960 1024H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h896a64 64 0 0 1 64 64v896a64 64 0 0 1-64 64z m0-896a64 64 0 0 0-64-64H128a64 64 0 0 0-64 64v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128z m-128 640h-128a64 64 0 0 1 0-128h64V576h-64a64 64 0 0 1 0-128h64V384h-64a64 64 0 0 1 0-128h128a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64z m-320-128a64 64 0 0 1 0 128H384a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64h64V384H384a64 64 0 0 1 0-128h128a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64H448v64h64z m-320 128a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v384a64 64 0 0 1-64 64z"
        p-id="6618"
      ></path>
    ),
  },
  upload: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M896 629.333333c-17.066667 0-32 14.933333-32 32v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z"
          p-id="9883"
        ></path>
        <path
          d="M322.133333 407.466667l157.866667-157.866667V704c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V247.466667l157.866667 157.866666c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8 0l-213.333334 213.333333c-12.8 12.8-12.8 32 0 44.8 10.666667 12.8 32 12.8 44.8 2.133334z"
          p-id="9884"
        ></path>
      </g>
    ),
  },
  range: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M896 256a85.333333 85.333333 0 0 0-85.333333-85.333333h-42.666667V106.666667a21.333333 21.333333 0 0 0-21.333333-21.333334h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333334V170.666667H341.333333V106.666667a21.333333 21.333333 0 0 0-21.333333-21.333334h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333334V170.666667H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v554.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333z m-85.333333 554.666667H213.333333V341.333333h597.333334z m-320-384a21.333333 21.333333 0 0 0-21.333334 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333334 21.333333h213.333333a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333z m-170.666667 85.333333h42.666667a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333z m213.333333 170.666667a21.333333 21.333333 0 0 0 21.333334-21.333334v-42.666666a21.333333 21.333333 0 0 0-21.333334-21.333334h-213.333333a21.333333 21.333333 0 0 0-21.333333 21.333334v42.666666a21.333333 21.333333 0 0 0 21.333333 21.333334z m106.666667-21.333334a21.333333 21.333333 0 0 0 21.333333 21.333334h42.666667a21.333333 21.333333 0 0 0 21.333333-21.333334v-42.666666a21.333333 21.333333 0 0 0-21.333333-21.333334h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333334z"
        p-id="4807"
      ></path>
    ),
  },
  custom: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M742.997333 676.010667a42.538667 42.538667 0 0 0 0 60.330666c16.64 16.64 43.946667 16.384 60.544-0.213333l213.12-213.12-213.12-213.162667a42.666667 42.666667 0 0 0-60.544-0.170666 43.093333 43.093333 0 0 0 0 60.501333l152.490667 153.301333-152.490667 152.533334z m-529.834666 60.16a42.666667 42.666667 0 0 0 60.501333 0.170666 43.52 43.52 0 0 0 0.256-60.757333L122.666667 520.96 273.92 369.749333a42.368 42.368 0 0 0-0.256-60.074666 42.965333 42.965333 0 0 0-60.501333 0.170666L0 523.008l213.162667 213.12zM469.333333 810.666667l170.666667-598.997334h-85.333333L384 810.666667h85.333333z"
        fill="#525A65"
        p-id="5912"
      ></path>
    ),
  },
  qrcode: {
    viewBox: '0 0 1024 1024',
    data: (
      <path
        d="M491.925333 532.074667V853.333333H170.666667V532.074667h321.258666zM597.333333 789.333333v64h-64v-64h64z m256-85.333333v149.333333h-128v-64h64v-85.333333h64z m-425.408-107.925333H234.666667V789.333333h193.258666v-193.258666zM661.333333 597.333333v128h64v64h-128v-192h64z m-277.333333 42.666667v106.666667h-106.666667v-106.666667h106.666667z m405.333333 0v64h-64v-64h64z m64-106.666667v106.666667h-64v-42.666667h-64v-64h128z m-256 0v64h-64v-64h64zM491.925333 170.666667v321.258666H170.666667V170.666667h321.258666zM853.333333 170.666667v321.258666H532.074667V170.666667H853.333333z m-425.408 64H234.666667v193.258666h193.258666V234.666667zM789.333333 234.666667h-193.258666v193.258666H789.333333V234.666667z m-405.333333 42.666666v106.666667h-106.666667v-106.666667h106.666667z m362.666667 0v106.666667h-106.666667v-106.666667h106.666667z"
        p-id="4871"
      ></path>
    ),
  },
  label: {
    viewBox: '0 0 1024 1024',
    data: (
      <g>
        <path
          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
          p-id="5717"
        ></path>
        <path
          d="M492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 688h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
          p-id="5718"
        ></path>
        <path d="M380 368m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="5719"></path>
        <path d="M380 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="5720"></path>
        <path d="M380 656m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="5721"></path>
      </g>
    ),
  },
};

type Glyphs = { [key in keyof typeof GlyphsBase]: IGlyph } & { [key: string]: IGlyph };
const glyphs: Glyphs = GlyphsBase;

export default glyphs;