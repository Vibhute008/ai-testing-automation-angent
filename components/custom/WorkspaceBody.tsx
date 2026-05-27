"use client";
import React from "react";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Link } from "lucide-react";
import EmptyWorkspace from "./EmptyWorkspace";

function WorkspaceBody() {
  const { userDetails } = useContext(UserDetailContext);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-medium">Workspace</h2>
        <h2 className="text-blue-800 bg-blue-100 px-2 rounded-lg">
          Remaining Credits: {userDetails?.credits}
        </h2>
      </div>

      <Card className="mt-5 flex justify-between items-center p-4 border rounded-lg">
        <div className="flex items-center gap-5">
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
          <h2 className="text-lg">Connect Github & Add Repository</h2>
        </div>
        <Button>Setup</Button>
      </Card>

      <Card className="rounded-xl border bg-card text-card-foreground shadow mt-10">
       <CardContent>
        <EmptyWorkspace />
       </CardContent>
      </Card>
    </div>
  );
}

export default WorkspaceBody;
