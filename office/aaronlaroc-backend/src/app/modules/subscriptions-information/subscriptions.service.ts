// import Stripe from "stripe";
// import { PaymentModel } from "./payment.model.js";
// import { LobbyModel } from "../Lobby/lobby.model.js";
// import { Types } from "mongoose";
// import type { Request, Response } from "express";
// import config from "../../config/index.js";
// import catchAsync from "../../utils/catcgAsync.js";
// import QueryBuilder from "../../builder/QueryBuilder.js";
// import { userModel } from "../auth/auth.model.js";
 
// const stripe = new Stripe(config.sk_key!, { apiVersion: "2025-08-27.basil" as any });
 
 
// export const joinLobby = async (req: Request, res: Response) => {
//      try {
//           const playerId = req?.user?.id;
//           const { lobbyId, teamId, defaultTeam, matchPosition, price, matchFormat, method } = req.body;
 
//           const lobby = await LobbyModel.findById(lobbyId);
//           if (!lobby) return res.status(404).json({ message: "Lobby not found" });
 
//           const playerObjectId = typeof playerId === "string" ? new Types.ObjectId(playerId) : playerId;
//           const teamObjectId = teamId ? (typeof teamId === "string" ? new Types.ObjectId(teamId) : teamId) : undefined;
 
//           // Duplicate & slot check
//           const isDuplicate =
//                lobby.team1?.players.some(p => p.playerId.toString() === playerObjectId.toString()) ||
//                lobby.team2?.players.some(p => p.playerId.toString() === playerObjectId.toString()) ||
//                lobby.defaultTeam1?.players.some(p => p.playerId.toString() === playerObjectId.toString()) ||
//                lobby.defaultTeam2?.players.some(p => p.playerId.toString() === playerObjectId.toString());
 
//           if (isDuplicate) return res.status(400).json({ message: "Player already joined this lobby" });
 
//           if (lobby.team1!.players.length >= lobby.maxSlot && lobby.team2!.players.length >= lobby.maxSlot) {
//                return res.status(400).json({ message: "Both teams are full" });
//           }
 
//           // Create Payment Record (pending)
//           const payment = await PaymentModel.create({
//                lobbyId,
//                playerId: playerObjectId,
//                teamId: teamObjectId,
//                price,
//                status: "pending",
//                method,
//                matchPosition
//           });
 
//           if(method==="cash"){
//                const result = await payment.save();
//                return res.json({
//                     success:true,
//                     message:"Cash request successFully sended and wait for the admin",
//                     data: result
//                 })
//           }
 
//           // Stripe Checkout Session (expand payment_intent)
//           const session = await stripe.checkout.sessions.create({
//                payment_method_types: ["card"],
//                line_items: [{
//                     price_data: {
//                          currency: "usd",
//                          product_data: { name: "Lobby Join Fee" },
//                          unit_amount: price * 100,
//                     },
//                     quantity: 1,
//                }],
//                mode: "payment",
//                success_url: `http://localhost:5000/api/v1/payment/payment-success?paymentId=${payment._id}`,
//                cancel_url: `http://localhost:5000/api/v1/payment/payment-cancel?paymentId=${payment._id}`,
//                metadata: {
//                     paymentId: payment._id.toString(),
//                     lobbyId: lobbyId.toString(),
//                     playerId: playerObjectId.toString(),
//                     teamId: teamObjectId?.toString() || "",
//                     matchPosition: matchPosition || "",
//                     defaultTeam: defaultTeam || "",
//                     matchFormat: matchFormat || "",
//                     method
//                },
//                expand: ["payment_intent"]
//           });
 
//           // Save PaymentIntent ID properly
//           payment.stripePaymentIntentId = session.id || "";
//           await payment.save();
 
//           return res.json({ sessionId: session.id });
//      } catch (err) {
//           console.error(err);
//           return res.status(500).json({ message: "Internal server error" });
//      }
// };
 
 
// export const paymentSuccess = async (req: Request, res: Response) => {
//      try {
//           const { paymentId } = req.query;
//           if (!paymentId) return res.status(400).json({ message: "Payment ID missing" });
 
//           const payment = await PaymentModel.findById(paymentId);
//           if (!payment) return res.status(404).json({ message: "Payment not found" });
 
//           if(payment.method !== "cash"){
//                // Retrieve PaymentIntent from Stripe
//                const session = await stripe.checkout.sessions.retrieve(payment.stripePaymentIntentId!, {
//                     expand: ["payment_intent"],
//                });
 
//                if ((session.payment_intent as any)?.status !== "succeeded") {
//                     return res.status(400).json({ message: "Payment not successful" });
//                }
 
//           }
 
         
 
//           payment.status = "success";
//           await payment.save();
 
//           // Add player to lobby
//           const lobby = await LobbyModel.findById(payment.lobbyId);
//           if (!lobby) return res.status(404).json({ message: "Lobby not found" });
 
//           const playerData = {
//                playerId: payment.playerId,
//                matchPosition: payment.matchPosition || "",
//                redCard: 0,
//                yellowCard: 0,
//                substitution: 0,
//                assists: 0,
//                goal: 0,
//                tackle: 0,
//                save: 0,
//                rating: 0,
//           };
 
//           if (lobby.matchType === "solo") {
//                const targetTeam = payment.defaultTeam;
//                //@ts-ignore
//                if (targetTeam === "defaultTeam1") lobby.defaultTeam1!.players.push(playerData);
//                //@ts-ignore
//                else if (targetTeam === "defaultTeam2") lobby.defaultTeam2!.players.push(playerData);
//           } else {
//                const team = payment.teamId?.toString() === lobby.team1!.teamId.toString() ? lobby.team1 : lobby.team2;
//                //@ts-ignore
//                team!.players.push(playerData);
 
 
//           }
//           const profile = await userModel.findById(payment.playerId);
//           if (profile) {
//                // Increment match count
//                profile.match = (profile.match || 0) + 1;
//                await profile.save();
//           }
 
//                await lobby.save();
 
//           res.json({
//                success:true,
//                message: "Payment success and player added" });
//      } catch (err) {
//           console.error(err);
//           res.status(500).json({ message: "Internal server error" });
//      }
// };
 
 
// export const paymentCancel = async (req: Request, res: Response) => {
//      try {
//           const { paymentId } = req.query;
//           if (!paymentId) return res.status(400).json({ message: "Payment ID missing" });
 
//           const payment = await PaymentModel.findById(paymentId);
//           if (!payment) return res.status(404).json({ message: "Payment not found" });
 
//           payment.status = "failed";
//           await payment.save();
 
//           res.json({ message: "Payment cancelled" });
//      } catch (err) {
//           console.error(err);
//           res.status(500).json({ message: "Internal server error" });
//      }
// };
 
 
// export const allPaymentHistory = catchAsync(async (req, res) => {
//      const paymentQuery = new QueryBuilder(PaymentModel.find().populate("lobbyId teamId playerId").select("-stripePaymentIntentId"), req.query).filter().search(["status","method"]).sort()
//      const result = await paymentQuery.modelQuery
 
//      res.status(200).json({
//           success: true,
//           message: "all payment data retrieved successfully",
//           data: result
//      })
// })
 