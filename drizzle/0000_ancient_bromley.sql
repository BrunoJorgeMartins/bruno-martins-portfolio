CREATE TABLE `portfolioFiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`url` varchar(512) NOT NULL,
	`mimeType` varchar(191) NOT NULL,
	`byteSize` int NOT NULL,
	`category` enum('curriculo','screenshot','projeto','outro') NOT NULL DEFAULT 'outro',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `portfolioFiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `portfolioFiles_fileKey_unique` UNIQUE(`fileKey`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
--> statement-breakpoint
ALTER TABLE `portfolioFiles` ADD CONSTRAINT `portfolioFiles_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `portfolioFiles_userId_createdAt_idx` ON `portfolioFiles` (`userId`,`createdAt`);