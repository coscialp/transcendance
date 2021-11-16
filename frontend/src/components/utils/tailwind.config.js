module.exports = {
  //purge: {
  //  enabled: true,
  //  content: ['../**/*.tsx'],
  //},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        pr: '1px',
        center: '25%',
        actuality: '50%',
        '4/5': '80%', '2.5%': '2.5%', '5.5%': '5.5%', '10%': '10%', '15%': '15%', '18%': '18%', '20%': '20%', '25%': '25%', '30%': '30%', '35%': '35%', '40%': '40%', '45%': '45%', '60%': '60%', '67.5%': '67.5%', '70%': '70%', '75%': '75%', '80%': '80%', '90%': '90%', '98%': '98%', '97%': '97%', '96%': '96%', '95%': '95%', '150%': '140%',
       '0%':'0%','0.5%':'0.5%','1%':'1%','1.5%':'1.5%','2%':'2%','2.5%':'2.5%','3%':'3%','3.5%':'3.5%','4%':'4%','4.5%':'4.5%','5%':'5%','5.5%':'5.5%','6%':'6%','6.5%':'6.5%','7%':'7%','7.5%':'7.5%','8%':'8%','8.5%':'8.5%','9%':'9%','9.5%':'9.5%','10%':'10%','10.5%':'10.5%','11%':'11%','11.5%':'11.5%','12%':'12%','12.5%':'12.5%','13%':'13%','13.5%':'13.5%','14%':'14%','14.5%':'14.5%','15%':'15%','15.5%':'15.5%','16%':'16%','16.5%':'16.5%','17%':'17%','17.5%':'17.5%','18%':'18%','18.5%':'18.5%','19%':'19%','19.5%':'19.5%','20%':'20%','20.5%':'20.5%','21%':'21%','21.5%':'21.5%','22%':'22%','22.5%':'22.5%','23%':'23%','23.5%':'23.5%','24%':'24%','24.5%':'24.5%','25%':'25%','25.5%':'25.5%','26%':'26%','26.5%':'26.5%','27%':'27%','27.5%':'27.5%','28%':'28%','28.5%':'28.5%','29%':'29%','29.5%':'29.5%','30%':'30%','30.5%':'30.5%','31%':'31%','31.5%':'31.5%','32%':'32%','32.5%':'32.5%','33%':'33%','33.5%':'33.5%','34%':'34%','34.5%':'34.5%','35%':'35%','35.5%':'35.5%','36%':'36%','36.5%':'36.5%','37%':'37%','37.5%':'37.5%','38%':'38%','38.5%':'38.5%','39%':'39%','39.5%':'39.5%','40%':'40%','40.5%':'40.5%','41%':'41%','41.5%':'41.5%','42%':'42%','42.5%':'42.5%','43%':'43%','43.5%':'43.5%','44%':'44%','44.5%':'44.5%','45%':'45%','45.5%':'45.5%','46%':'46%','46.5%':'46.5%','47%':'47%','47.5%':'47.5%','48%':'48%','48.5%':'48.5%','49%':'49%','49.5%':'49.5%','50%':'50%','50.5%':'50.5%','51%':'51%','51.5%':'51.5%','52%':'52%','52.5%':'52.5%','53%':'53%','53.5%':'53.5%','54%':'54%','54.5%':'54.5%','55%':'55%','55.5%':'55.5%','56%':'56%','56.5%':'56.5%','57%':'57%','57.5%':'57.5%','58%':'58%','58.5%':'58.5%','59%':'59%','59.5%':'59.5%','60%':'60%','60.5%':'60.5%','61%':'61%','61.5%':'61.5%','62%':'62%','62.5%':'62.5%','63%':'63%','63.5%':'63.5%','64%':'64%','64.5%':'64.5%','65%':'65%','65.5%':'65.5%','66%':'66%','66.5%':'66.5%','67%':'67%','67.5%':'67.5%','68%':'68%','68.5%':'68.5%','69%':'69%','69.5%':'69.5%','70%':'70%','70.5%':'70.5%','71%':'71%','71.5%':'71.5%','72%':'72%','72.5%':'72.5%','73%':'73%','73.5%':'73.5%','74%':'74%','74.5%':'74.5%','75%':'75%','75.5%':'75.5%','76%':'76%','76.5%':'76.5%','77%':'77%','77.5%':'77.5%','78%':'78%','78.5%':'78.5%','79%':'79%','79.5%':'79.5%','80%':'80%','80.5%':'80.5%','81%':'81%','81.5%':'81.5%','82%':'82%','82.5%':'82.5%','83%':'83%','83.5%':'83.5%','84%':'84%','84.5%':'84.5%','85%':'85%','85.5%':'85.5%','86%':'86%','86.5%':'86.5%','87%':'87%','87.5%':'87.5%','88%':'88%','88.5%':'88.5%','89%':'89%','89.5%':'89.5%','90%':'90%','90.5%':'90.5%','91%':'91%','91.5%':'91.5%','92%':'92%','92.5%':'92.5%','93%':'93%','93.5%':'93.5%','94%':'94%','94.5%':'94.5%','95%':'95%','95.5%':'95.5%','96%':'96%','96.5%':'96.5%','97%':'97%','97.5%':'97.5%','98%':'98%','98.5%':'98.5%','99%':'99%','99.5%':'99.5%','100%':'100%','100.5%':'100.5%','101%':'101%','101.5%':'101.5%','102%':'102%','102.5%':'102.5%','103%':'103%','103.5%':'103.5%','104%':'104%','104.5%':'104.5%','105%':'105%','105.5%':'105.5%','106%':'106%','106.5%':'106.5%','107%':'107%','107.5%':'107.5%','108%':'108%','108.5%':'108.5%','109%':'109%','109.5%':'109.5%','110%':'110%','110.5%':'110.5%','111%':'111%','111.5%':'111.5%','112%':'112%','112.5%':'112.5%','113%':'113%','113.5%':'113.5%','114%':'114%','114.5%':'114.5%','115%':'115%','115.5%':'115.5%','116%':'116%','116.5%':'116.5%','117%':'117%','117.5%':'117.5%','118%':'118%','118.5%':'118.5%','119%':'119%','119.5%':'119.5%','120%':'120%','120.5%':'120.5%','121%':'121%','121.5%':'121.5%','122%':'122%','122.5%':'122.5%','123%':'123%','123.5%':'123.5%','124%':'124%','124.5%':'124.5%','125%':'125%','125.5%':'125.5%','126%':'126%','126.5%':'126.5%','127%':'127%','127.5%':'127.5%','128%':'128%','128.5%':'128.5%','129%':'129%','129.5%':'129.5%','130%':'130%','130.5%':'130.5%','131%':'131%','131.5%':'131.5%','132%':'132%','132.5%':'132.5%','133%':'133%','133.5%':'133.5%','134%':'134%','134.5%':'134.5%','135%':'135%','135.5%':'135.5%','136%':'136%','136.5%':'136.5%','137%':'137%','137.5%':'137.5%','138%':'138%','138.5%':'138.5%','139%':'139%','139.5%':'139.5%','140%':'140%','140.5%':'140.5%','141%':'141%','141.5%':'141.5%','142%':'142%','142.5%':'142.5%','143%':'143%','143.5%':'143.5%','144%':'144%','144.5%':'144.5%','145%':'145%','145.5%':'145.5%','146%':'146%','146.5%':'146.5%','147%':'147%','147.5%':'147.5%','148%':'148%','148.5%':'148.5%','149%':'149%','149.5%':'149.5%','150%':'150%','150.5%':'150.5%','151%':'151%','151.5%':'151.5%','152%':'152%','152.5%':'152.5%','153%':'153%','153.5%':'153.5%','154%':'154%','154.5%':'154.5%','155%':'155%','155.5%':'155.5%','156%':'156%','156.5%':'156.5%','157%':'157%','157.5%':'157.5%','158%':'158%','158.5%':'158.5%','159%':'159%','159.5%':'159.5%','160%':'160%','160.5%':'160.5%','161%':'161%','161.5%':'161.5%','162%':'162%','162.5%':'162.5%','163%':'163%','163.5%':'163.5%','164%':'164%','164.5%':'164.5%','165%':'165%','165.5%':'165.5%','166%':'166%','166.5%':'166.5%','167%':'167%','167.5%':'167.5%','168%':'168%','168.5%':'168.5%','169%':'169%','169.5%':'169.5%','170%':'170%','170.5%':'170.5%','171%':'171%','171.5%':'171.5%','172%':'172%','172.5%':'172.5%','173%':'173%','173.5%':'173.5%','174%':'174%','174.5%':'174.5%','175%':'175%','175.5%':'175.5%','176%':'176%','176.5%':'176.5%','177%':'177%','177.5%':'177.5%','178%':'178%','178.5%':'178.5%','179%':'179%','179.5%':'179.5%','180%':'180%','180.5%':'180.5%','181%':'181%','181.5%':'181.5%','182%':'182%','182.5%':'182.5%','183%':'183%','183.5%':'183.5%','184%':'184%','184.5%':'184.5%','185%':'185%','185.5%':'185.5%','186%':'186%','186.5%':'186.5%','187%':'187%','187.5%':'187.5%','188%':'188%','188.5%':'188.5%','189%':'189%','189.5%':'189.5%','190%':'190%','190.5%':'190.5%','191%':'191%','191.5%':'191.5%','192%':'192%','192.5%':'192.5%','193%':'193%','193.5%':'193.5%','194%':'194%','194.5%':'194.5%','195%':'195%','195.5%':'195.5%','196%':'196%','196.5%':'196.5%','197%':'197%','197.5%':'197.5%','198%':'198%','198.5%':'198.5%','199%':'199%','199.5%':'199.5%',
      },
      borderRadius: { 
        Actuality: '1.25rem',
      },
      colors: {
        'gold': {
          DEFAULT: '#FFCF88',
        },
        'Banner': {
          DEFAULT: '#2C5579',
        },
        'LiGreen': {
          DEFAULT: '#14FF00'
        },
        'BoxActuality': '#C4C4C4',
        'HoverM': '#887558',
        'MenuColor': '#ADD8E6',
      },
      animation: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
} 