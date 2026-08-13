import { google } from 'googleapis';

const clean=(v,max=2000)=>String(v??'').replace(/[<>]/g,'').trim().slice(0,max);
const emailOk=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Método no permitido'});
  try{
    const {nombre,telefono,email,modelo,mensaje,website}=req.body||{};
    if(website) return res.status(200).json({success:true});
    const n=clean(nombre,80), t=clean(telefono,30), e=clean(email,120), mo=clean(modelo,100), m=clean(mensaje,2000);
    if(!n||!t||!e||!m||!emailOk(e)) return res.status(400).json({error:'Revisa los campos obligatorios'});
    const oauth2Client=new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID,process.env.GOOGLE_CLIENT_SECRET);
    oauth2Client.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN});
    const gmail=google.gmail({version:'v1',auth:oauth2Client});
    const html=`<h2>Nueva consulta KitchenaidTech</h2><p><b>Web:</b> serviciotecnicoamasadoras.com.es</p><p><b>Nombre:</b> ${n}</p><p><b>Teléfono:</b> ${t}</p><p><b>Email:</b> ${e}</p><p><b>Modelo:</b> ${mo||'No indicado'}</p><p><b>Avería:</b><br>${m.replace(/\n/g,'<br>')}</p>`;
    const subject='Nueva consulta KitchenaidTech - serviciotecnicoamasadoras.com.es';
    const raw=[`From: KitchenaidTech <${process.env.GOOGLE_EMAIL}>`,`To: ${process.env.CONTACT_EMAIL}`,`Reply-To: ${e}`,`Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,'MIME-Version: 1.0','Content-Type: text/html; charset=UTF-8','',html].join('\r\n');
    const encoded=Buffer.from(raw).toString('base64url');
    await gmail.users.messages.send({userId:'me',requestBody:{raw:encoded}});
    return res.status(200).json({success:true});
  }catch(err){console.error('contacto:',err?.message);return res.status(500).json({error:'No se pudo enviar el correo'});}
}